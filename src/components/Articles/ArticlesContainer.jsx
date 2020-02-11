import React from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getEverythingArticles} from "../../redux/articles-reducer";
import Preloader from "../common/Preloader/Preloader";
import GoTop from "../common/GoTop/GoTop";
import {toggleIsGoTop} from "../../redux/app-reducer";

class ArticlesContainer extends React.Component {
    componentDidMount() {
        this.props.getEverythingArticles();
        window.addEventListener('scroll', this.onScrollEnd)
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollEnd)
    };

    onScrollEnd = (e) => {
        let scroll = window.pageYOffset;
        let heightDocument = document.querySelector('#root').scrollHeight;

        if (scroll >= heightDocument - document.documentElement.clientHeight - 300 && !this.props.isFetching) {
            this.props.getEverythingArticles(this.props.page + 1);
        }

        if (scroll > 600) {
            this.props.toggleIsGoTop(true);
        } else {
            this.props.toggleIsGoTop(false);
        }
    };

    scrollTop = () => {
        let increment = window.pageYOffset / 20;
        let scroller = setInterval(() => {
            window.scrollTo(0, window.pageYOffset - increment);

            if (window.pageYOffset <= 0) clearInterval(scroller);
        }, 20);
    };


    render() {
        const {isFetching, articles, isGoTop, ...props} = this.props;

        return (
            <div>
                {isGoTop && <GoTop scrollTop={this.scrollTop}/>}
                {isFetching && <Preloader/>}
                <Articles articles={articles}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        articles: state.articles.everythingArticles,
        page: state.articles.page,
        isFetching: state.app.isFetching,
        isGoTop: state.app.isGoTop
    })
};

export default connect(mapStateToProps, {getEverythingArticles, toggleIsGoTop})(ArticlesContainer)
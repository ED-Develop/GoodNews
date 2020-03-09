import React from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getEverythingArticles} from "../../redux/articles-reducer";
import Preloader from "../common/Preloader/Preloader";
import GoTop from "../common/GoTop/GoTop";
import {toggleIsGoTop} from "../../redux/app-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {CSSTransitionGroup} from "react-transition-group";

class ArticlesContainer extends React.Component {
    componentDidMount() {
        this.props.getEverythingArticles(1, this.props.match.params.category);
        window.addEventListener('scroll', this.onScrollEnd)
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollEnd)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            this.props.getEverythingArticles(1, this.props.match.params.category);
            this.scrollTop();
        }
    }

    onScrollEnd = (e) => {
        let scroll = window.pageYOffset;
        let heightDocument = document.querySelector('#root').scrollHeight;

        if (scroll >= heightDocument - document.documentElement.clientHeight - 300 && !this.props.isFetching) {
            this.props.getEverythingArticles(this.props.page + 1, this.props.match.params.category);
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
                <CSSTransitionGroup
                    transitionName="btnGoTop"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {isGoTop && <GoTop scrollTop={this.scrollTop}/>}
                </CSSTransitionGroup>

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

export default compose(connect(mapStateToProps, {getEverythingArticles, toggleIsGoTop}), withRouter)(ArticlesContainer);
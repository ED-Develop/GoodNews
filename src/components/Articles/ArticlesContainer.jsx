import React from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getEverythingArticles} from "../../redux/articles-reducer";

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

        if (scroll >= heightDocument - document.documentElement.clientHeight - 300) {
            this.props.getEverythingArticles(this.props.page + 1);
        }
    };

    render() {
        return (
            <div>
                <Articles articles={this.props.articles}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        articles: state.articles.everythingArticles,
        page: state.articles.page
    })
};

export default connect(mapStateToProps, {getEverythingArticles})(ArticlesContainer)
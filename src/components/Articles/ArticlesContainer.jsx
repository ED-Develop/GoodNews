import React from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getEverythingArticles, initializeArticlesPage} from "../../redux/articles-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withScrollTop} from "../../hoc/withScrollTop";
import queryString from 'query-string';

class ArticlesContainer extends React.PureComponent {
    componentDidMount() {
        this.props.initializeArticlesPage([{page: this.props.page, pageSize: 5}]);
        window.addEventListener('scroll', this.onScrollEnd);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollEnd)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.category !== prevProps.match.params.category
            || this.props.location.search !== prevProps.location.search) {
            this.getArticles(1);
            this.props.scrollTop();
        }
    };

    onScrollEnd = (e) => {
        let scroll = window.pageYOffset;
        let heightDocument = document.querySelector('#root').scrollHeight;

        if (scroll >= heightDocument - document.documentElement.clientHeight - 300 && !this.props.isFetching) {
            this.getArticles(this.props.page + 1);
        }
    };

    getArticles = (page = 1, pageSize = 5) => {
        const options = {
            page: page,
            pageSize: pageSize
        };
        if (this.props.location.search) {
            options.q = queryString.parse(this.props.location.search).search;
        } else if (this.props.match.params.category) {
            options.qInTitle = this.props.match.params.category;
        }

        this.props.getEverythingArticles(options);
    };

    render() {
        const {isFetching, articles, isInitialized} = this.props;

        return (
            <div>
                {isFetching && <Preloader/>}
                {
                    isInitialized
                        ? <Articles articles={articles}/>
                        : <Preloader/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        articles: state.articles.everythingArticles,
        page: state.articles.page,
        isFetching: state.app.isFetching,
        isInitialized: state.app.isInitialized
    })
};

export default compose(connect(mapStateToProps, {getEverythingArticles, initializeArticlesPage}), withRouter,
    withScrollTop)(ArticlesContainer);

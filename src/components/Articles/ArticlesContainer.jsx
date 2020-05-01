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
        if (this.props.region) {
            this.props.initializeArticlesPage([this.getArticlesOptions(this.props.page, 5)]);
        }

        window.addEventListener('scroll', this.onScrollEnd);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollEnd);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.urlParamsObserver(prevProps);
        this.regionObserver(prevProps);
    };

    urlParamsObserver = (prevProps) => {
        if (this.props.match.params.category !== prevProps.match.params.category
            || this.props.location.search !== prevProps.location.search) {
            this.props.getEverythingArticles(this.getArticlesOptions(1));
            this.props.scrollTop();
        }
    };

    regionObserver = (prevProps) => {
        if (this.props.region && prevProps.region !== this.props.region) {
            this.props.initializeArticlesPage([this.getArticlesOptions(1, 5)]);
            this.props.scrollTop();
        }
    };

    onScrollEnd = (e) => {
        let scroll = window.pageYOffset;
        let heightDocument = document.querySelector('#root').scrollHeight;
        const {isInitialized, isFetching} = this.props;

        if (scroll >= heightDocument - document.documentElement.clientHeight - 300 && !isFetching && isInitialized) {
            this.props.getEverythingArticles(this.getArticlesOptions(this.props.page + 1));
        }
    };

    getArticlesOptions = (page = 1, pageSize = 5) => {
        const options = {
            page: page,
            pageSize: pageSize
        };

        if (this.props.location.search) {
            options.q = queryString.parse(this.props.location.search).search;
        } else if (this.props.match.params.category) {
            options.category = this.props.match.params.category;
        }

        return options;
    };

    render() {
        const {articles, isInitialized} = this.props;

        return (
            <div>
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
        isInitialized: state.app.isInitialized,
        region: state.app.region
    })
};

export default compose(connect(mapStateToProps, {getEverythingArticles, initializeArticlesPage}), withRouter,
    withScrollTop)(ArticlesContainer);

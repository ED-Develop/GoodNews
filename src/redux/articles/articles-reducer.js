import {setIdInArrayObjects} from "../../helpers/redux-helpers";

const SET_ASIDE_ARTICLES = 'good-news/articles/SET_ASIDE_ARTICLES';
const SET_EVERYTHING_ARTICLES = 'good-news/articles/SET_EVERYTHING_ARTICLES';
const SET_ASIDE_FILTER = 'good-news/articles/SET_ASIDE_FILTER';
const SET_CURRENT_PAGE = 'good-news/articles/SET_CURRENT_PAGE';
export const GET_ARTICLES_LIST = 'good-news/articles/GET_ARTICLES_LIST';
export const GET_ASIDE_ARTICLES = 'good-news/articles/GET_ASIDE_ARTICLES';
export const INITIALIZE_ARTICLE_PAGE = 'good-news/articles/INITIALIZE_ARTICLE_PAGE';

const initialState = {
    asideArticles: [],
    everythingArticles: [],
    asideFilter: 'popular',
    page: 1
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ASIDE_ARTICLES:
            return {
                ...state,
                asideArticles: action.articles
            };
        case SET_EVERYTHING_ARTICLES:
            if (action.page === 1) {
                return {
                    ...state,
                    everythingArticles: setIdInArrayObjects(action.articles)
                }
            } else {
                return {
                    ...state,
                    everythingArticles: setIdInArrayObjects([...state.everythingArticles, ...action.articles])
                };
            }
        case SET_ASIDE_FILTER:
        case SET_CURRENT_PAGE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

//actions
export const setAsideFilter = (asideFilter) => ({type: SET_ASIDE_FILTER, payload: {asideFilter}});
export const setAsideArticles = (articles) => ({type: SET_ASIDE_ARTICLES, articles});
export const setEverythingArticles = (articles, page) => ({type: SET_EVERYTHING_ARTICLES, articles, page});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: {page}});
export const getEverythingArticles = (options) => ({type: GET_ARTICLES_LIST, payload: {options}});
export const getAsideArticles = () => ({type: GET_ASIDE_ARTICLES});
export const initializeArticlesPage = (everythingArticlesArgs) => ({
    type: INITIALIZE_ARTICLE_PAGE,
    payload: {
        everythingArticlesArgs
    }
});

// helpers
export const formatAsideArticles = (articles) => setIdInArrayObjects(articles.sort(() => 0.5 - Math.random()))
    .map((a) => ({
        id: a.source.id,
        image: a.urlToImage,
        title: a.title,
        publishedAt: a.publishedAt,
        url: a.url
    }));

export default articlesReducer;

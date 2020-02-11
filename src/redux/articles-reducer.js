import {topHeadlinesAPI, everythingAPI} from "../api/api";
import {toggleIsFetching} from "./app-reducer";

const SET_ASIDE_ARTICLES = 'good-news/articles/SET_TOP_ARTICLES';
const SET_EVERYTHING_ARTICLES = 'good-news/articles/SET_EVERYTHING_ARTICLES';
const SET_ASIDE_FILTER = 'good-news/articles/SET_ASIDE_FILTER';
const SET_CURRENT_PAGE = 'good-news/articles/SET_CURRENT_PAGE';

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
                asideArticles: action.articles.map((a, index) => {
                    return ({...a, source: {...a.source, id: index}})
                })
            };
        case SET_EVERYTHING_ARTICLES:
            if (action.page === 1) {
                return {
                    ...state,
                    everythingArticles: [...action.articles]
                }
            }
            return {
                ...state,
                everythingArticles: [...state.everythingArticles, ...action.articles].map((a, index) => {
                    return ({...a, source: {...a.source, id: index}})
                })
            };
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

export const getAsideArticles = () => async (dispatch, getState) => {
    try {
        let response;

        dispatch(toggleIsFetching(true));

        if (getState().articles.asideFilter === 'popular') {
            response = await topHeadlinesAPI.getArticles({pageSize: 60});
        } else {
            response = await everythingAPI.getArticles({sortBy: 'publishedAt', pageSize: 60});
        }

        dispatch(setAsideArticles(response.articles));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        console.log(e);
    }
};

export const getEverythingArticles = (page = 1, keyword = 'headlines') => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));

        let response = await everythingAPI.getArticles({pageSize: '5', page, keyword});

        dispatch(setEverythingArticles(response.articles, page));
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        console.log(e);
    }
};

export const setAsideFilter = (asideFilter) => {
    return {
        type: SET_ASIDE_FILTER,
        payload: {
            asideFilter
        }
    }
};

export const setAsideArticles = (articles) => ({
    type: SET_ASIDE_ARTICLES,
    articles
});

export const setEverythingArticles = (articles, page) => ({
    type: SET_EVERYTHING_ARTICLES,
    articles,
    page
});

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page
        }
    }
};

export default articlesReducer;
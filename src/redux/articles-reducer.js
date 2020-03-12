import {topHeadlinesAPI, everythingAPI} from "../api/api";
import {toggleIsFetching} from "./app-reducer";
import {setIdInArrayObjects} from "../helpers/redux";

const SET_ASIDE_ARTICLES = 'good-news/articles/SET_ASIDE_ARTICLES';
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
                asideArticles: setIdInArrayObjects(action.articles)
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

export const setAsideFilter = (asideFilter) => {
    return {
        type: SET_ASIDE_FILTER,
        payload: {
            asideFilter
        }
    }
};

//actions

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

//thunks

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

export const getEverythingArticles = (page = 1, q) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));

        let response = await everythingAPI.getArticles({pageSize: '5', page, q});

        dispatch(setEverythingArticles(response.articles, page));
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        console.log(e);
    }
};


export default articlesReducer;
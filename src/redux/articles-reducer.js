import {topHeadlinesAPI, everythingAPI} from "../api/newsApi";
import {setIdInArrayObjects} from "../helpers/redux-helpers";
import {commonAsyncHandler, initializePage} from "./common";

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

export const setAsideFilter = (asideFilter) => ({
    type: SET_ASIDE_FILTER,
    payload: {
        asideFilter
    }
});

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
export const initializeArticlesPage = (everythingArticlesArgs) => (dispatch, getState) => {
    const promise1 = dispatch(getAsideArticles(false));
    const promise2 = dispatch(getEverythingArticles(...everythingArticlesArgs, false));

    initializePage(dispatch, getState, [promise1, promise2]);
};

export const getAsideArticles = (isVisualization = true) => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        let response;

        if (getState().articles.asideFilter === 'popular') {
            response = await topHeadlinesAPI.getArticles({pageSize: 60, country: getState().app.region});
        } else {
            response = await everythingAPI.getArticles({sortBy: 'publishedAt', pageSize: 60});
        }

        dispatch(setAsideArticles(response.articles));

        return response;
    }, dispatch, isVisualization);
};

export const getEverythingArticles = (options, isVisualization = true) => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        let response = await topHeadlinesAPI.getArticles({...options, country: getState().app.region});

        dispatch(setEverythingArticles(response.articles, options.page));
        dispatch(setCurrentPage(options.page));

        return response;
    }, dispatch, isVisualization);
};


export default articlesReducer;

import {articleAPI} from "../api/api";

const SET_ASIDE_ARTICLES = 'good-news/articles/SET_TOP_ARTICLES';
const SET_EVERYTHING_ARTICLES = 'good-news/articles/SET_EVERYTHING_ARTICLES';
const SET_ASIDE_FILTER = 'good-news/articles/SET_ASIDE_FILTER';

const initialState = {
    asideArticles: [],
    everythingArticles: [],
    asideFilter: 'popular'
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
            return {
                ...state,
                everythingArticles: action.articles.map((a, index) => {
                    return ({...a, source: {...a.source, id: index}})
                })
            };
        case SET_ASIDE_FILTER:
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

        if (getState().articles.asideFilter === 'popular') {
            response = await articleAPI.getTopArticles();
        } else {
            response = await articleAPI.getEverythingArticles();
        }

        dispatch(setAsideArticles(response.articles));
    } catch (e) {
        console.log(e);
    }
};

export const getEverythingArticles = () => async (dispatch) => {
    try {
        let response = await articleAPI.getEverythingArticles();
        dispatch(setEverythingArticles(response.articles));
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

export const setEverythingArticles = (articles) => ({
    type: SET_EVERYTHING_ARTICLES,
    articles
});

export default articlesReducer;
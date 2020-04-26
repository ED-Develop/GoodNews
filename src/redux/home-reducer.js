import {setIdInArrayObjects} from "../helpers/redux-helpers";
import {toggleIsFetching} from "./app-reducer";
import {topHeadlinesAPI} from "../api/newsApi";

const SET_TOP_ARTICLES = 'good-news/articles/SET_TOP_ARTICLES';
const SET_CATEGORY_ARTICLES = 'good-news/articles/SET_CATEGORY_ARTICLES';

const initialState = {
    topArticles: [],
    categoryArticles: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_ARTICLES:
            return {
                ...state,
                topArticles: setIdInArrayObjects(action.articles)
            };
        case SET_CATEGORY_ARTICLES:
            return {
                ...state,
                categoryArticles: action.articles
            };
        default:
            return state;
    }
};

//actions

export const setTopArticles = (articles) => ({
    type: SET_TOP_ARTICLES,
    articles
});

const setCategoryArticles = (articles) => ({
    type: SET_CATEGORY_ARTICLES,
    articles
});

//thunks

export const getTopArticles = (pageSize, category = 'general') => async (dispatch) => {
    try {
        let response = await topHeadlinesAPI.getArticles({pageSize, category});

        dispatch(setTopArticles(response.articles));
    } catch (e) {
        console.log(e);
    }
};


export const getCategoryArticles = (categories, pageSize) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));
        let articles = [];

        for (let i = 0; i < categories.length; i++) {
            let response = await topHeadlinesAPI.getArticles({pageSize, category: categories[i]});

            articles = [...articles, {category: categories[i], data: setIdInArrayObjects(response.articles)}]
        }

        dispatch(setCategoryArticles(articles));
        dispatch(toggleIsFetching(false));
    } catch (e) {
        console.log(e)
    }
};

export default homeReducer;

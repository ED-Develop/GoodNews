import {setIdInArrayObjects} from "../../helpers/redux-helpers";
import {topHeadlinesAPI} from "../../api/newsApi";

const SET_TOP_ARTICLES = 'good-news/articles/SET_TOP_ARTICLES';
const SET_CATEGORY_ARTICLES = 'good-news/articles/SET_CATEGORY_ARTICLES';
export const INITIALIZE_HOME_PAGE = 'good-news/articles/INITIALIZE_HOME_PAGE';

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

export const setCategoryArticles = (articles) => ({
    type: SET_CATEGORY_ARTICLES,
    articles
});

export const initializeHomePage = (topArticlesArg, categoryArticlesArg) => ({
    type: INITIALIZE_HOME_PAGE,
    payload: {
        topArticlesArg,
        categoryArticlesArg
    }
});

export const fetchCategoryArticles = async (categories, pageSize, state) => {
    let articles = [];
    let response;

    for (let i = 0; i < categories.length; i++) {
        response = await topHeadlinesAPI.getArticles({
            pageSize,
            category: categories[i],
            country: state.app.region
        });

        articles = [...articles, {category: categories[i], data: setIdInArrayObjects(response.articles)}]
    }

    return articles;
};

export default homeReducer;

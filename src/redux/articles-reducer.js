import {articleAPI} from "../api/api";

const SET_ARTICLES = 'good-news/articles/SET_ARTICLES';

const initialState = {
    articles: []
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.articles.map((a, index) => {
                    return ({...a, source: {...a.source, id: index}})
                })
            };
        default:
            return state;
    }
};

export const getArticles = () => async (dispatch) => {
    try {
        let response = await articleAPI.getArticles();
        dispatch(setArticles(response.articles));
    } catch (e) {
        console.log(e);
    }
};

const setArticles = (articles) => ({
    type: SET_ARTICLES,
    articles
});

export default articlesReducer;
import {createSelector} from "reselect";

const getAsideArticles = (state) => {
    return state.articles.asideArticles
};

export const getArticlesTitle = createSelector(getAsideArticles,  (articles) => {
    return articles.map( a => {
        return {
            title: a.title,
            url: a.url
        }
    })
});
import {createSelector} from "reselect";

const getAsideArticles = (state) => {
    return state.articles.asideArticles
};

export const getArticlesTitle = createSelector(getAsideArticles, (articles) => {
    return articles.map((a, index) => {
        return {
            title: a.title,
            url: a.url,
            id: index
        }
    })
});
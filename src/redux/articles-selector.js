import {createSelector} from "reselect";

const getAsideArticles = (state) => {
    return state.articles.asideArticles
};

const getTopArticles = (state) => {
    return state.articles.topArticles;
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

export const getCarouselData = createSelector(getTopArticles, (articles) => {
    return articles.map( (a) => {
        return {
            id: a.source.id,
            image: a.urlToImage,
            title: a.title
        }
    })
});
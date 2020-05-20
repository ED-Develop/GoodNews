import {createSelector} from "reselect";

const getTopArticles = (state) =>  state.home.topArticles;

export const getCarouselData = createSelector(getTopArticles, (articles) => {
    return articles.map((a) => {
        return {
            id: a.source.id,
            image: a.urlToImage,
            title: a.title
        }
    })
});

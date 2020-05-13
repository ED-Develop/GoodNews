import {createSelector} from "reselect";

const getAsideArticles = (state) => state.articles.asideArticles;
const getAsideFilter = (state) => state.articles.asideFilter;

export const sortAsideArticles = createSelector(getAsideArticles, getAsideFilter,
    (articles, filter) => {
        if (filter === 'popular') {
            return articles.sort((a, b) => a.id - b.id);
        } else if (filter === 'latest'){
            return articles.sort((a, b) => {
                const dateA = new Date(a.publishedAt);
                const dateB = new Date(b.publishedAt);

                return dateB - dateA;
            });
        }
    }
);

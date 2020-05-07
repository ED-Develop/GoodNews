import {all} from "redux-saga/effects";
import {watchInitHomePage,
} from "../home/home-sagas";
import {watchGetArticlesList, watchGetAsideArticles, watchInitArticlePage} from "../articles/articles-sagas";

function* rootSaga() {
    yield all([
        watchInitHomePage(),
        watchGetArticlesList(),
        watchGetAsideArticles(),
        watchInitArticlePage()
    ])
}

export default rootSaga;

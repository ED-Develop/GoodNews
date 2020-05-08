import {call, select, put, takeEvery, all} from "redux-saga/effects";
import {topHeadlinesAPI} from "../../api/newsApi";
import {
    fetchAsideArticles,
    GET_ARTICLES_LIST, GET_ASIDE_ARTICLES, getEverythingArticles, INITIALIZE_ARTICLE_PAGE,
    setAsideArticles,
    setCurrentPage,
    setEverythingArticles
} from "./articles-reducer";
import {commonSagaHandler, initializePageCommonSaga} from "../saga/common";

function* getArticlesListSaga(action, isVisualization = true, isTryCatch) {
    yield commonSagaHandler(function* () {
        const {options} = yield action.payload;
        const state = yield select();
        const response = yield call(topHeadlinesAPI.getArticles, {...options, country: state.app.region});
        yield put(setEverythingArticles(response.articles, options.page));
        yield put(setCurrentPage(options.page));
    }, isVisualization, false, isTryCatch);
}

function* watchGetArticlesList() {
    yield takeEvery(GET_ARTICLES_LIST, getArticlesListSaga);
}

function* getAsideArticlesSaga(isVisualization = true, isTryCatch) {
   yield commonSagaHandler(function* () {
       const state = yield select();
       const articles = yield call(fetchAsideArticles, state);
       yield put(setAsideArticles(articles));
   }, isVisualization, false, isTryCatch);
}

function* watchGetAsideArticles() {
    yield takeEvery(GET_ASIDE_ARTICLES, getAsideArticlesSaga);
}

function* initializeArticlePageSaga(action) {
    const {everythingArticlesArgs} = yield action.payload;
    yield initializePageCommonSaga([
        getArticlesListSaga(getEverythingArticles(...everythingArticlesArgs, false, false)),
        getAsideArticlesSaga(false, false)
    ]);
}

function* watchInitArticlePage() {
    yield takeEvery(INITIALIZE_ARTICLE_PAGE, initializeArticlePageSaga);
}

export function* articlesSaga() {
    yield all([
        watchGetArticlesList(),
        watchGetAsideArticles(),
        watchInitArticlePage(),
    ]);
}

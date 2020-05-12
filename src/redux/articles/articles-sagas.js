import {call, select, put, takeEvery, takeLatest} from "redux-saga/effects";
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

function* getAsideArticlesSaga(isVisualization = true, isTryCatch) {
   yield commonSagaHandler(function* () {
       const state = yield select();
       const articles = yield call(fetchAsideArticles, state);
       yield put(setAsideArticles(articles));
   }, isVisualization, false, isTryCatch);
}

function* initializeArticlePageSaga(action) {
    const {everythingArticlesArgs} = yield action.payload;
    yield initializePageCommonSaga([
        getArticlesListSaga(getEverythingArticles(...everythingArticlesArgs, false, false)),
        getAsideArticlesSaga(false, false)
    ]);
}

export function* watchArticlesSagas() {
    yield takeLatest(GET_ARTICLES_LIST, getArticlesListSaga);
    yield takeEvery(GET_ASIDE_ARTICLES, getAsideArticlesSaga);
    yield takeEvery(INITIALIZE_ARTICLE_PAGE, initializeArticlePageSaga);
}

import {call, put, select, takeEvery, all} from "redux-saga/effects";
import {topHeadlinesAPI} from "../../api/newsApi";
import {
    fetchCategoryArticles, INITIALIZE_HOME_PAGE,
    setCategoryArticles,
    setTopArticles
} from "./home-reducer";
import {initializePageCommonSaga} from "../saga/common";

function* getTopArticlesSaga(pageSize, category = 'general') {
    const state = yield select();
    const response = yield call(topHeadlinesAPI.getArticles, {
        pageSize,
        category,
        country: state.app.region
    });

    yield put(setTopArticles(response.articles));
}

function* getCategoryArticlesSaga(categories, pageSize) {
    const state = yield select();
    const articles = yield call(fetchCategoryArticles, categories, pageSize, state);
    yield put(setCategoryArticles(articles));
}

function* initializeHomePageSaga(action) {
    yield initializePageCommonSaga([
        getTopArticlesSaga(...action.payload.topArticlesArg),
        getCategoryArticlesSaga(...action.payload.categoryArticlesArg)
    ]);
}

function* watchInitHomePage() {
    yield takeEvery(INITIALIZE_HOME_PAGE, initializeHomePageSaga)
}


export function* homeSaga() {
    yield all([
        watchInitHomePage(),
    ]);
}

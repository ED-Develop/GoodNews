import {toggleIsInitialized} from "../app-reducer";
import {put, takeEvery, all, call} from "redux-saga/effects";
import {getCategoryArticles, getTopArticles, INITIALIZE_HOME_PAGE} from "../home-reducer";

export function* initializeHomePageSaga(action) {
    yield all([
        put(getTopArticles(...action.payload.topArticlesArg)),
        put(getCategoryArticles(...action.payload.categoryArticlesArg))
    ]);

    yield put(toggleIsInitialized(true));
}

export function* watchInitHomePage() {
    yield takeEvery(INITIALIZE_HOME_PAGE, initializeHomePageSaga)
}

function* rootSaga() {
    yield all([
        watchInitHomePage()
    ])
}

export default rootSaga;

import {all} from "redux-saga/effects";
import {articlesSaga} from "../articles/articles-sagas";
import {homeSaga} from "../home/home-sagas";
import {appSaga} from "../app/app-sagas";
import {watchAuthSagas} from "../auth/auth-saga";

function* rootSaga() {
    yield all([
        homeSaga(),
        articlesSaga(),
        watchAuthSagas()
    ])
}

export default rootSaga;

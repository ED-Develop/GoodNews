import {all} from "redux-saga/effects";
import {articlesSaga} from "../articles/articles-sagas";
import {homeSaga} from "../home/home-sagas";
import {watchAppSagas} from "../app/app-sagas";
import {watchAuthSagas} from "../auth/auth-saga";
import {watchProfileSagas} from "../profile/profile-sagas";

function* rootSaga() {
    yield all([
        watchAppSagas(),
        homeSaga(),
        articlesSaga(),
        watchAuthSagas(),
        watchProfileSagas()
    ])
}

export default rootSaga;

import {all} from "redux-saga/effects";
import {watchArticlesSagas} from "../articles/articles-sagas";
import {watchHomeSagas} from "../home/home-sagas";
import {watchAppSagas} from "../app/app-sagas";
import {watchAuthSagas} from "../auth/auth-saga";
import {watchProfileSagas} from "../profile/profile-sagas";
import {updateMembershipSaga} from "../memberships/memberships-saga";

function* rootSaga() {
    yield all([
        watchAppSagas(),
        watchHomeSagas(),
        watchArticlesSagas(),
        watchAuthSagas(),
        watchProfileSagas(),
        updateMembershipSaga()
    ])
}

export default rootSaga;

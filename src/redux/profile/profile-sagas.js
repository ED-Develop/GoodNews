import {call, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import {commonSagaHandler, initializePageCommonSaga} from "../saga/common";
import {mockApi} from "../../api/mockApi";
import {
    editUserProfile,
    GET_USER_PROFILE,
    setUserProfile,
    UPDATE_USER_PROFILE,
} from "./profile-reducer";
import {setRegion} from "../app/app-reducer";
import {setUserData} from "../auth/auth-reducer";

function* getUserProfileSaga() {
    yield commonSagaHandler(function* () {
        const state = yield select();
        const response = yield call(mockApi.getProfile, state.auth.id);

        if (response.resultCode === 0) {
            yield put(setUserProfile(response.data));
        }
    }, false, true, false);
}

function* initializeProfilePage() {
    yield initializePageCommonSaga([getUserProfileSaga()]);
}

export function* updateUserProfileSaga({payload: {data}}) {
    return yield commonSagaHandler(function* () {
        const state = yield select();
        const response = yield call(mockApi.updateProfile,state.auth.id, data);
        const {id, login, email, region, membership} = response.data;

        if (response.resultCode === 0) {
            yield put(editUserProfile(data));
            yield put(setUserData({id, login, email, membership}));
            yield put(setRegion(region));
        }

        return response.resultCode;
    }, true);
}

export function* watchProfileSagas() {
     yield takeLatest(GET_USER_PROFILE, initializeProfilePage);
     yield takeEvery(UPDATE_USER_PROFILE, updateUserProfileSaga);
}

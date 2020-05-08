import {call, put, select, takeEvery} from "redux-saga/effects";
import {commonSagaHandler} from "../saga/common";
import {mockApi} from "../../api/mockApi";
import {editUserProfile, GET_USER_PROFILE, setUserProfile, UPDATE_USER_PROFILE} from "./profile-reducer";
import {setRegion} from "../app/app-reducer";
import {setUserData} from "../auth/auth-reducer";

function* getUserProfile() {
    yield commonSagaHandler(function* () {
        const state = yield select();
        const response = yield call(mockApi.getProfile, state.auth.id);
        if (response.resultCode === 0) {
            yield put(setUserProfile(response.data));
        }
    }, true);
}

function* updateUserProfile({payload: {data}}) {
    yield commonSagaHandler(function* () {
        const state = yield select();
        const response = yield call(mockApi.updateProfile,state.auth.id, data);
        const {id, login, email, region} = response.data;

        if (response.resultCode === 0) {
            yield put(editUserProfile(data));
            yield put(setUserData(id, login, email, true));
            yield put(setRegion(region));
        }
    }, true);
}

export function* watchProfileSagas() {
     yield takeEvery(GET_USER_PROFILE, getUserProfile);
     yield takeEvery(UPDATE_USER_PROFILE, updateUserProfile);
}

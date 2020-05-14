import {commonSagaHandler} from "../saga/common";
import {call, put, select, takeEvery, take} from "redux-saga/effects";
import {mockApi} from "../../api/mockApi";
import {stopSubmit} from "redux-form";
import {getGeolocationPosition, setRegion} from "../app/app-reducer";
import {updateUserProfile} from "../profile/profile-reducer";
import {
    LOGIN,
    LOGOUT,
    setUserData, SUBSCRIBE,
    toggleIsSubscribe,
} from "./auth-reducer";

export function* handleUserDataSaga({id, login, email, region, membership}) {
    const {app: {region: regionInState}} = yield select();
    yield put(setUserData(id, login, email, true, membership));
    yield put(setUserData({id, login, email, isAuth: true, membership}));

    if (region) {
        yield put(setRegion(region));
    } else {
        if (regionInState) {
            yield put(updateUserProfile({region: regionInState}));
        }
    }

    return region;
}

function* loginSaga(loginData) {
    const response = yield commonSagaHandler(function* () {
        const response = yield call(mockApi.login, loginData);

        if (response.resultCode === 0) {
            yield call(handleUserDataSaga, response.data);
        } else if (response.resultCode === 10) {
            yield put(stopSubmit('login', {_error: response.message}));
        }

        return response;
    }, true);

    return response.resultCode === 0;
}

export function* authSaga() {
    return yield commonSagaHandler(function* () {
        const response = yield call(mockApi.authMe);

        if (response.resultCode === 0) {
            return yield call(handleUserDataSaga, response.data);
        }
    }, false, true);
}

function* logoutSaga() {
    yield commonSagaHandler(function* () {
        const state = yield select();
        const data = yield mockApi.logout(state.auth.id);

        if (data.resultCode === 0) {
            yield put(setUserData({id: null, login: null, email: null, isAuth: false, membership: null}));
            yield put(getGeolocationPosition());
        }

        return data;
    });
}

export function* loginFlow() {
    while (true) {
        let {auth: {isAuth}} = yield select();

        if (!isAuth) {
            const {payload: {loginData}} = yield take(LOGIN);
            isAuth = yield call(loginSaga, loginData);
        }

        if (isAuth) {
            yield take(LOGOUT);
            yield call(logoutSaga);
        }
    }
}

function* subscribeSaga(action) {
    yield commonSagaHandler(function* () {
        const {email} = action.payload;
        const data = yield call(mockApi.subscribe, email);

        if (data.resultCode === 0) {
            yield put(toggleIsSubscribe(true));
        }
    }, true);
}

export function* watchAuthSagas() {
    yield takeEvery(SUBSCRIBE, subscribeSaga);
}

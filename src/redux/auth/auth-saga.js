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
    USER_DATA_HANDLING,
    userDataHandling
} from "./auth-reducer";

export function* handleUserDataSaga(action) {
    const {id, login, email, region} = yield action.payload.data;
    const state = yield select();

    yield put(setUserData(id, login, email, true));

    if (region) {
        yield put(setRegion(region));
    } else {
        yield put(updateUserProfile({region: state.app.region}));
    }
}

function* loginSaga(loginData) {
    const response = yield commonSagaHandler(function* () {
        const response = yield call(mockApi.login, loginData);

        if (response.resultCode === 0) {
            yield put(userDataHandling(response));
        } else if (response.resultCode === 10) {
            yield put(stopSubmit('login', {_error: response.message}));
        }

        return response;
    }, true);

    return response.resultCode === 0;
}

export function* authSaga() {
    yield commonSagaHandler(function* () {
        const response = yield call(mockApi.authMe);

        if (response.resultCode === 0) {
            yield put(userDataHandling(response));
        }

        return response;
    }, false, true, false);
}

function* logoutSaga() {
    yield commonSagaHandler(function* () {
        const state = yield select();
        const data = yield mockApi.logout(state.auth.id);

        if (data.resultCode === 0) {
            yield put(setUserData(null, null, null, false, false));
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
            console.log(isAuth)
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
    yield takeEvery(USER_DATA_HANDLING, handleUserDataSaga);
    yield takeEvery(SUBSCRIBE, subscribeSaga);
}

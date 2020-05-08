/*
import {commonSagaHandler} from "../saga/common";
import {call, put, select, takeEvery, all} from "redux-saga/effects";
import geolocationApi from "../../api/geolocationApi";
import {
    fetchInterfaceText,
    GET_GEOLOCATION_POSITION,
    GET_INTERFACE_TEXT, INITIALIZE_APP, initializeAppSuccess,
    setInterfaceText,
    setRegion
} from "./app-reducer";
import {authSaga} from "../auth/auth-saga";
import {authMe} from "../auth/auth-reducer";

function* getGeolocationPositionSaga() {
    yield commonSagaHandler(function* () {
        const region = geolocationApi.getCountryCode();
        yield put(setRegion(region));
    });
}

function* watchGetGeolocationPosition() {
    yield takeEvery(GET_GEOLOCATION_POSITION, getGeolocationPositionSaga);
}

function* getInterfaceTextSaga() {
    yield commonSagaHandler(function* () {
        const state = yield select();
        const interfaceText = yield call(fetchInterfaceText, state);
        yield put(setInterfaceText(interfaceText));
    }, false, false);
}

function* watchGetInterfaceText() {
    yield takeEvery(GET_INTERFACE_TEXT, getInterfaceTextSaga);
}

function* initializeAppSaga() {
    yield put(authMe());
    yield put(initializeAppSuccess());
}

function* watchInitializeApp() {
    yield takeEvery(INITIALIZE_APP, initializeAppSaga);
}

export function* appSaga() {
    yield all([
        watchInitializeApp(),
        watchGetGeolocationPosition(),
        watchGetInterfaceText(),
    ])
}
*/

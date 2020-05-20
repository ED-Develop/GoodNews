import {commonSagaHandler} from "../saga/common";
import {call, put, select, takeEvery} from "redux-saga/effects";
import {
    fetchGeolocationPosition,
    fetchInterfaceText, GET_GEOLOCATION_POSITION, GET_INTERFACE_TEXT, INITIALIZE_APP,
    initializeAppSuccess,
    setInterfaceText,
    setRegion
} from "./app-reducer";
import {authSaga, loginFlow} from "../auth/auth-saga";

function* getGeolocationPositionSaga() {
    const region = yield call(fetchGeolocationPosition);
    yield put(setRegion(region));
}

function* getInterfaceTextSaga() {
    yield commonSagaHandler(function* () {
        const {app: {region}} = yield select();
        const interfaceText = yield call(fetchInterfaceText, region);
        yield put(setInterfaceText(interfaceText));
    }, false, false);
}

function* initializeAppSaga() {
    const region = yield call(authSaga);

    if (!region) {
        yield call(getGeolocationPositionSaga);
    }

    yield call(getInterfaceTextSaga);
    yield put(initializeAppSuccess());
    yield call(loginFlow)
}

export function* watchAppSagas() {
    yield takeEvery(GET_INTERFACE_TEXT, getInterfaceTextSaga);
    yield takeEvery(INITIALIZE_APP, initializeAppSaga);
    yield takeEvery(GET_GEOLOCATION_POSITION, getGeolocationPositionSaga);
}

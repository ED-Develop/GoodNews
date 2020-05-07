import {setGlobalError, toggleIsFetching, toggleIsInitialized} from "../app-reducer";
import {all, put} from "redux-saga/effects";

export function* commonSagaHandler(operation, isVisualization, isResultCode = true, isTryCatch = true) {
    let preloader;

    if (isTryCatch) {
        if (isVisualization) {
            if (isResultCode) {
                const resultCodeHandler = yield withResultCodeHandlingError(operation);
                preloader = yield withPreloader(resultCodeHandler);
            } else {
                preloader = yield withPreloader(operation);
            }

            return yield withTryCatch(preloader)();
        } else {
            if (isResultCode) {
                const resultCodeHandler = yield withResultCodeHandlingError(operation);

                return yield withTryCatch(resultCodeHandler)();
            }

            return yield withTryCatch(operation)();
        }
    } else {
        if (isVisualization) {
            if (isResultCode) {
                const resultCodeHandler = yield withResultCodeHandlingError(operation);
                preloader = yield withPreloader(resultCodeHandler);
            } else {
                preloader = yield withPreloader(operation);
            }

            return yield preloader();
        } else {
            if (isResultCode) {
                return yield withResultCodeHandlingError(operation);
            }

            return yield operation();
        }
    }

}

export const withTryCatch = (operation) => {
    return function* () {
        try {
            return yield operation();
        } catch (error) {
            yield put(setGlobalError(error.message));
        }
    }
};

export const withPreloader = (operation) => {
    return function* () {
        yield put(toggleIsFetching(true));
        yield operation();
        yield put(toggleIsFetching(false));
    }
};

export const withResultCodeHandlingError = (operation) => {
    return function* () {
        const result = yield operation();

        if (result && result.resultCode && result.message && result.resultCode === 1) {
            yield put(setGlobalError(result.message));
        }

        return result;
    }
};

export function* initializePageCommonSaga(sagas = []) {
    try {
        yield put(toggleIsInitialized(false));
        yield all(sagas);
        yield put(toggleIsInitialized(true));
    } catch (error) {
        yield put(setGlobalError(error.message));
    }
}

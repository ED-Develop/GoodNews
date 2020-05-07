import {setGlobalError, toggleIsFetching, toggleIsInitialized} from "./app-reducer";

export const commonAsyncHandler = async (operation, dispatch, isVisualization, isResultCode = true, isTryCatch) => {
    let preloader;

    if (isVisualization) {
        if (isResultCode) {
            const resultCodeHandler = withResultCodeHandlingError(operation, dispatch);
            preloader = withPreloader(resultCodeHandler, dispatch);
        } else {
            preloader = withPreloader(operation, dispatch);
        }

        return await withTryCatch(preloader, dispatch)();
    } else {
        if (isResultCode) {
            const resultCodeHandler = withResultCodeHandlingError(operation, dispatch);

            return await withTryCatch(resultCodeHandler, dispatch)();
        }

        return await withTryCatch(operation, dispatch)();
    }
};

export const withTryCatch = (operation, dispatch) => async () => {
    try {
        return await operation();
    } catch (error) {
        dispatch(setGlobalError(error.message));
    }
};

export const withPreloader = (operation, dispatch) => async () => {
    dispatch(toggleIsFetching(true));
    await operation();
    dispatch(toggleIsFetching(false));
};

export const withResultCodeHandlingError = (operation, dispatch) => async () => {
    const result = await operation();

    if (result && result.resultCode && result.message && result.resultCode === 1) {
        dispatch(setGlobalError(result.message));
    }

    return result;
};

export const initializeAsyncHandler = async (operation, dispatch, getState) => {
    dispatch(toggleIsInitialized(false));

    const promises = await operation();

    Promise.all(promises).then(() => {
        const error = getState().app.globalError;

        if (!error) {
            dispatch(toggleIsInitialized(true));
        }
    })
};

import {mockApi} from "../api/mockApi";
import {stopSubmit} from "redux-form";
import {commonAsyncHandler, withTryCatch} from "./common";
import {getGeolocationPosition, setRegion} from "./app-reducer";
import {updateUserProfile} from "./profile-reducer";

const SET_USER_DATA = 'good-news/auth/SET_USER_DATA';
const TOGGLE_IS_SUBSCRIBE = 'good-news/auth/TOGGLE_IS_SUBSCRIBE';

const initialState = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case TOGGLE_IS_SUBSCRIBE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};

// actions

export const setUserData = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}
    }
};

const toggleIsSubscribe = (isSubscribe) => {
    return {
        type: TOGGLE_IS_SUBSCRIBE,
        payload: {
            isSubscribe
        }
    }
};

// thunks

const setAuthUserData = (response, dispatch, getState) => {
    const {id, login, email, region} = response.data;

    dispatch(setUserData(id, login, email, true));

    if (region) {
        dispatch(setRegion(region));
    } else {
        dispatch(updateUserProfile({region: getState().app.region}));
    }
};

export const login = (loginData) => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        const response = await mockApi.login(loginData);

        if (response.resultCode === 0) {
            setAuthUserData(response, dispatch, getState);
        } else if (response.resultCode === 10) {
            dispatch(stopSubmit('login', {_error: response.message}))
        }

        return response;
    }, dispatch, true, false);
};

export const logout = () => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        const data = await mockApi.logout(getState().auth.id);

        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false, false));
            dispatch(getGeolocationPosition());
        }

        return data;
    }, dispatch);
};

export const authMe = () => async (dispatch, getState) => {
    await commonAsyncHandler(async () => {
        const response = await mockApi.authMe();

        if (response.resultCode === 0) {
            setAuthUserData(response, dispatch, getState);
        }

        return response;
    }, dispatch);
};


export const subscribe = (email) => async (dispatch) => {
    await withTryCatch(async () => {
        const data = await mockApi.subscribe(email);

        if (data.resultCode === 0) {
            dispatch(toggleIsSubscribe(true));
        }
    }, dispatch)();
};

export default authReducer;

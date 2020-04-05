import {authApi} from "../api/authApi";
import {stopSubmit} from "redux-form";

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

const setUserData = (id, login, email, isAuth) => {
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

export const login = (loginData) => async (dispatch) => {
    try {
        const response = await authApi.login(loginData);

        if (response.resultCode === 0) {
            dispatch(setUserData(response.data.id, response.data.login, response.data.email, true))
        } else if (response.resultCode === 1) {
            dispatch(stopSubmit('login', {_error: response.message}))
        }
    } catch (e) {
        console.log(e)
    }
};

export const logout = () => async (dispatch, getState) => {
    try {
        const resultCode = await authApi.logout(getState().auth.email);

        if (resultCode === 0) {
            dispatch(setUserData(null, null, null, false, false))
        }
    } catch (e) {
        console.log(e);
    }
};

export const authMe = () => async (dispatch) => {
    try {
        const response = await authApi.authMe();

        if (response.resultCode === 0) {
            dispatch(setUserData(response.data.id, response.data.login, response.data.email, true));
        }
    } catch (e) {
        console.log(e);
    }
};


export const subscribe = (email) => async (dispatch) => {
    try {
        let resultCode = await authApi.subscribe(email);

        if (resultCode === 0) {
            dispatch(toggleIsSubscribe(true))
        }
    } catch (e) {
        console.log(e);
    }
};

export default authReducer;
import {mockApi} from "../api/mockApi";
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

export const login = (loginData) => async (dispatch) => {
    try {
        const response = await mockApi.login(loginData);
        const {id, login, email} = response.data;

        if (response.resultCode === 0) {
            dispatch(setUserData(id, login, email, true))
        } else if (response.resultCode === 1) {
            dispatch(stopSubmit('login', {_error: response.message}))
        }
    } catch (e) {
        console.log(e)
    }
};

export const logout = () => async (dispatch, getState) => {
    try {
        const resultCode = await mockApi.logout(getState().auth.id);

        if (resultCode === 0) {
            dispatch(setUserData(null, null, null, false, false))
        }
    } catch (e) {
        console.log(e);
    }
};

export const authMe = () => async (dispatch) => {
    try {
        const response = await mockApi.authMe();
        const {id, login, email} = response.data;

        if (response.resultCode === 0) {
            dispatch(setUserData(id, login, email, true));
        }
    } catch (e) {
        console.log(e);
    }
};


export const subscribe = (email) => async (dispatch) => {
    try {
        let resultCode = await mockApi.subscribe(email);

        if (resultCode === 0) {
            dispatch(toggleIsSubscribe(true))
        }
    } catch (e) {
        console.log(e);
    }
};

export default authReducer;
const SET_USER_DATA = 'good-news/auth/SET_USER_DATA';
const TOGGLE_IS_SUBSCRIBE = 'good-news/auth/TOGGLE_IS_SUBSCRIBE';
export const USER_DATA_HANDLING = 'good-news/auth/USER_DATA_HANDLING';
export const LOGIN = 'good-news/auth/LOGIN';
export const AUTH_ME = 'good-news/auth/AUTH_ME';
export const LOGOUT = 'good-news/auth/LOGOUT';
export const SUBSCRIBE = 'good-news/auth/SUBSCRIBE';

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

export const setUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}});
export const toggleIsSubscribe = (isSubscribe) => ({type: TOGGLE_IS_SUBSCRIBE, payload: {isSubscribe}});
export const userDataHandling = (payload) => ({type: USER_DATA_HANDLING, payload});
export const login = (loginData) => ({type: LOGIN, payload: {loginData}});
export const authMe = () => ({type: AUTH_ME});
export const logout = () => ({type: LOGOUT});
export const subscribe = (email) => ({type: SUBSCRIBE, payload: {email}});

export default authReducer;

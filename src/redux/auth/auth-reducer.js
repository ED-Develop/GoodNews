const SET_USER_DATA = 'good-news/auth/SET_USER_DATA';
const TOGGLE_IS_SUBSCRIBE = 'good-news/auth/TOGGLE_IS_SUBSCRIBE';
export const LOGIN = 'good-news/auth/LOGIN';
export const LOGOUT = 'good-news/auth/LOGOUT';
export const SUBSCRIBE = 'good-news/auth/SUBSCRIBE';

const initialState = {
    isAuth: false,
    id: null,
    login: null,
    email: null,
    membership: null
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

export const setUserData = (data) => ({type: SET_USER_DATA, payload: data});
export const toggleIsSubscribe = (isSubscribe) => ({type: TOGGLE_IS_SUBSCRIBE, payload: {isSubscribe}});
export const login = (loginData) => ({type: LOGIN, payload: {loginData}});
export const logout = () => ({type: LOGOUT});
export const subscribe = (email) => ({type: SUBSCRIBE, payload: {email}});

export default authReducer;

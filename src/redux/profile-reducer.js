import {mockApi} from "../api/mockApi";
import {setRegion, toggleIsFetching} from "./app-reducer";
import {setUserData} from "./auth-reducer";

const SET_USER_PROFILE = 'good-news/profile/SET_USER_PROFILE';
const EDIT_USER_PROFILE = 'good-news/profile/EDIT_USER_PROFILE';

const initialState = {
    user: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.payload
            };
        case EDIT_USER_PROFILE:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.data
                }
            };
        default:
            return state;
    }
};

// actions
const setUserProfile = (user) => ({
    type: SET_USER_PROFILE,
    payload: {
        user
    }
});

const editUserProfile = (data) => ({
    type: EDIT_USER_PROFILE,
    payload: {
        data
    }
});


// thunks

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        dispatch(toggleIsFetching(true));
        const response = await mockApi.getProfile(getState().auth.id);

        if (response.resultCode === 0) {
            dispatch(setUserProfile(response.data));
        }
        dispatch(toggleIsFetching(false));
    } catch (e) {
        console.log(e);
    }
};

export const updateUserProfile = (data) => async (dispatch, getState) => {
    try {
        dispatch(toggleIsFetching(true));
        const response = await mockApi.updateProfile(getState().auth.id, data);
        const {id, login, email, region} = response.data;

        if (response.resultCode === 0) {
            dispatch(editUserProfile(data));
            dispatch(setUserData(id, login, email, true));
            dispatch(setRegion(region));
        }
        dispatch(toggleIsFetching(false));
    } catch (e) {
        console.log(e);
    }
};

export default profileReducer;

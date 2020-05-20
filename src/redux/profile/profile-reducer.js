const SET_USER_PROFILE = 'good-news/profile/SET_USER_PROFILE';
const EDIT_USER_PROFILE = 'good-news/profile/EDIT_USER_PROFILE';
export const GET_USER_PROFILE = 'good-news/profile/GET_USER_PROFILE';
export const UPDATE_USER_PROFILE = 'good-news/profile/UPDATE_USER_PROFILE';

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
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, payload: {user}});
export const editUserProfile = (data) => ({type: EDIT_USER_PROFILE, payload: {data}});
export const getUserProfile = () => ({type: GET_USER_PROFILE});
export const updateUserProfile = (data) => ({type: UPDATE_USER_PROFILE, payload: {data}});

export default profileReducer;

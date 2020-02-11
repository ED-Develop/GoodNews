const TOGGLE_IS_FETCHING = 'good-news/app/TOGGLE_IS_FETCHING';
const TOGGLE_IS_GO_TOP = 'good-news/app/TOGGLE_IS_GO_TOP';

const initialState = {
    isFetching: false,
    isGoTop: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
        case TOGGLE_IS_GO_TOP:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    }
};

export const toggleIsGoTop = (isGoTop) => {
    return {
        type: TOGGLE_IS_GO_TOP,
        payload: {
            isGoTop
        }
    }
};

export default appReducer;


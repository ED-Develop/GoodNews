const TOGGLE_IS_FETCHING = 'good-news/app/TOGGLE_IS_FETCHING';

const initialState = {
    isFetching: false,
    isGoTop: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

//actions
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    }
};


export default appReducer;


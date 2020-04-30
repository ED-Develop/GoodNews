const TOGGLE_IS_FETCHING = 'good-news/app/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FIXED_FOOTER = 'good-news/app/TOGGLE_IS_FIXED_FOOTER';
const SET_GLOBAL_ERROR = 'good-news/app/SET_GLOBAL_ERROR';
const TOGGLE_IS_INITIALIZED = 'good-news/app/TOGGLE_IS_INITIALIZED';

const initialState = {
    isFixedFooter: false,
    isFetching: false,
    isGoTop: false,
    globalError: null,
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
        case SET_GLOBAL_ERROR:
        case TOGGLE_IS_INITIALIZED:
        case TOGGLE_IS_FIXED_FOOTER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

//actions
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: {
        isFetching
    }
});

export const toggleIsFixedFooter = (isFixedFooter) => ({
    type: TOGGLE_IS_FIXED_FOOTER,
    payload: {
        isFixedFooter
    }
});

export const setGlobalError = (error) => ({
    type: SET_GLOBAL_ERROR,
    payload: {
        globalError: error
    }
});

export const toggleIsInitialized = (isInitialized) => ({
    type: TOGGLE_IS_INITIALIZED,
    payload: {
        isInitialized
    }
});


export default appReducer;


import {commonAsyncHandler} from "./common";
import geolocationApi from "../api/geolocationApi";
import {authMe} from "./auth-reducer";
import {translationApi} from "../api/translationApi";

const TOGGLE_IS_FETCHING = 'good-news/app/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FIXED_FOOTER = 'good-news/app/TOGGLE_IS_FIXED_FOOTER';
const SET_GLOBAL_ERROR = 'good-news/app/SET_GLOBAL_ERROR';
const TOGGLE_IS_INITIALIZED = 'good-news/app/TOGGLE_IS_INITIALIZED';
const SET_REGION = 'good-news/app/SET_REGION';
const INITIALIZE_APP = 'good-news/app/INITIALIZE_APP';
const SET_INTERFACE_TEXT = 'good-news/app/SET_INTERFACE_TEXT';
const INCREMENT = 'good-news/app/INCREMENT';

const initialState = {
    isFixedFooter: false,
    isFetching: false,
    isGoTop: false,
    globalError: null,
    isInitialized: false,
    isInitializedApp: false,
    region: null,
    interfaceText: null,
    counter: 1
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
        case SET_GLOBAL_ERROR:
        case TOGGLE_IS_INITIALIZED:
        case TOGGLE_IS_FIXED_FOOTER:
        case INITIALIZE_APP:
        case SET_REGION:
        case SET_INTERFACE_TEXT:
            return {
                ...state,
                ...action.payload
            };
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
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

export const increment = () => ({
    type: INCREMENT,
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

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: {
        region
    }
});

export const initializeAppSuccess = () => ({
    type: INITIALIZE_APP,
    payload: {
        isInitializedApp: true
    }
});

export const setInterfaceText = (interfaceText) => ({
    type: SET_INTERFACE_TEXT,
    payload: {
        interfaceText
    }
});

export const action = (action) => ({
    type: action
});

// thunks

export const getGeolocationPosition = () => async (dispatch) => {
    await commonAsyncHandler(async () => {
        const region = await geolocationApi.getCountryCode();

        dispatch(setRegion(region));
    }, dispatch);
};

export const initializeApp = () => async (dispatch) => {
    const promise1 = dispatch(authMe());

    Promise.all([promise1]).then(() => {
        dispatch(initializeAppSuccess());
    })
};

export const getInterfaceText = () => (dispatch, getState) => {
    const region = getState().app.region.toLowerCase();
    let regionLanguage;

    switch (region) {
        case 'ua':
        case 'ru':
        case 'by':
            regionLanguage = 'ru';
            break;
        default:
            regionLanguage = 'en';
    }

    const interfaceText = translationApi.getLocale(regionLanguage);

    dispatch(setInterfaceText(interfaceText));
};


export default appReducer;


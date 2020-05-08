import {geolocationApi} from "../../api/geolocationApi";
import {translationApi} from "../../api/translationApi";

const TOGGLE_IS_FETCHING = 'good-news/app/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FIXED_FOOTER = 'good-news/app/TOGGLE_IS_FIXED_FOOTER';
const SET_GLOBAL_ERROR = 'good-news/app/SET_GLOBAL_ERROR';
const TOGGLE_IS_INITIALIZED = 'good-news/app/TOGGLE_IS_INITIALIZED';
const SET_REGION = 'good-news/app/SET_REGION';
const INITIALIZE_APP_SUCCESS = 'good-news/app/INITIALIZE_APP_SUCCESS';
const SET_INTERFACE_TEXT = 'good-news/app/SET_INTERFACE_TEXT';
export const GET_INTERFACE_TEXT = 'good-news/app/GET_INTERFACE_TEXT';
export const INITIALIZE_APP = 'good-news/app/INITIALIZE_APP';
export const GET_GEOLOCATION_POSITION = 'good-news/app/GET_GEOLOCATION_POSITION';

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
        case INITIALIZE_APP_SUCCESS:
        case SET_REGION:
        case SET_INTERFACE_TEXT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

//actions
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}});
export const toggleIsFixedFooter = (isFixedFooter) => ({type: TOGGLE_IS_FIXED_FOOTER, payload: {isFixedFooter}});
export const setGlobalError = (error) => ({type: SET_GLOBAL_ERROR, payload: {globalError: error}});
export const toggleIsInitialized = (isInitialized) => ({type: TOGGLE_IS_INITIALIZED, payload: {isInitialized}});
export const setRegion = (region) => ({type: SET_REGION, payload: {region}});
export const initializeAppSuccess = () => ({type: INITIALIZE_APP_SUCCESS, payload: {isInitializedApp: true}});
export const setInterfaceText = (interfaceText) => ({type: SET_INTERFACE_TEXT, payload: {interfaceText}});
export const getInterfaceText = () => ({type: GET_INTERFACE_TEXT});
export const initializeApp = () => ({type: INITIALIZE_APP});
export const getGeolocationPosition = () => ({type: GET_GEOLOCATION_POSITION});

// helpers

export const fetchGeolocationPosition = async () => {
    return await geolocationApi.getCountryCode();
};

export const fetchInterfaceText = (region) => {
    let regionLanguage;

    switch (region.toLowerCase()) {
        case 'ua':
        case 'ru':
        case 'by':
            regionLanguage = 'ru';
            break;
        default:
            regionLanguage = 'en';
    }

    return translationApi.getLocale(regionLanguage);
};

export default appReducer;


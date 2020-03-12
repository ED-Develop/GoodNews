import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import articlesReducer from "./articles-reducer";
import ReduxThunk from 'redux-thunk';
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import homeReducer from "./home-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    articles: articlesReducer,
    app: appReducer,
    auth: authReducer,
    home: homeReducer,
    form: formReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
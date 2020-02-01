import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import articlesReducer from "./articles-reducer";
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    articles: articlesReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
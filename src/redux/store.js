import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import articlesReducer from "./articles/articles-reducer";
import ReduxThunk from 'redux-thunk';
import appReducer from "./app/app-reducer";
import authReducer from "./auth/auth-reducer";
import { reducer as formReducer } from 'redux-form';
import homeReducer from "./home/home-reducer";
import profileReducer from "./profile/profile-reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/rootSaga";
import membershipsReducer from "./memberships/memberships-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    articles: articlesReducer,
    app: appReducer,
    auth: authReducer,
    home: homeReducer,
    profile: profileReducer,
    memberships: membershipsReducer,
    form: formReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;

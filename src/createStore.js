/**
 * Created by reza on 1/24/17.
 */

import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import newsFeedReducer from './news/reducers/newsFeedReducer';
import searchTermReducer from './news/reducers/searchTermReducer';

const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        combineReducers({
            news: newsFeedReducer,
            searchTerm : searchTermReducer
        }),
        initialState,
        applyMiddleware(logger, promiseMiddleware)
    )
);
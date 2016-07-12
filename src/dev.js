import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { SliceList, Reducers } from './index.js';

const initState = {
    sliceIds: [1, 2],
    slices: {
        1: {
            id: 1,
            name: 't1',
            text: 'long time ago',
            translations: []
        },
        2: {
            id: 2,
            name: 't2',
            text: 'in galaxy far far away...',
            translations: []
        }
    },
    translations: {}
};

const reducer = combineReducers(Reducers);
const store = createStore(reducer, initState);

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
        <Provider store={store}>
            <SliceList />
        </Provider>
        , document.getElementsByTagName('body')[0]
    );
}

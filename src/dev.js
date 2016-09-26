import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { SliceList, Reducers } from './index.js';

const initState = {
    slices: {
        byId: {
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
        order: [1, 2]
    },
    translations: {}
};

const reducer = combineReducers(Reducers);
const store = createStore(reducer, initState, window.devToolsExtension && window.devToolsExtension());

if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
        <Provider store={store}>
            <SliceList />
        </Provider>
        , document.getElementsByTagName('body')[0]
    );
}

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf } from '@kadira/storybook';
import SliceList from './components/slice-list';
import { Reducers } from './index';

const initState = {
    slices: {
        byId: {
            1: {
                id: 1,
                name: 't1',
                text: 'long time ago',
                translations: [],
                comments: []
            },
            2: {
                id: 2,
                name: 't2',
                text: 'in galaxy far far away...',
                translations: [],
                comments: []
            }
        },
        order: [1, 2]
    },
    translations: {}
};

const reducer = combineReducers(Reducers);
const store = createStore(reducer, initState, window.devToolsExtension && window.devToolsExtension());

storiesOf('Translation', module)
    .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
    .add('default', () => <SliceList/>);

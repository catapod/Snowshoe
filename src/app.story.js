import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf } from '@kadira/storybook';
// import ChunkList from './components/chunk-list';
import { Reducers } from './index';
import StaticBase from './components/static-base';

const initState = {
    chunks: {
        byId: {
            1: {
                id: 1,
                name: 't1',
                text: 'This course covers matrix theory and linear algebra, emphasizing topics useful in other disciplines. Linear algebra is a branch of mathematics that studies systems of linear equations and the properties of matrices.',
                translations: [],
                comments: []
            },
            2: {
                id: 2,
                name: 't2',
                text: 'After successfully completing the course, you will have a good understanding of the following topics and their applications:',
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
    .add('default', () => <StaticBase/>);

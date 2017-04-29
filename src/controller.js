import {Controller} from 'cerebral';
import Devtools from 'cerebral/devtools';
import state from './state';
import signals from './signals';

const controller = Controller({
    devtools: Devtools({remoteDebugger: 'localhost:8880'}),
    state,
    signals
});

export default controller;

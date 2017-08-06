import {Controller} from 'cerebral';
import HttpProvider from '@cerebral/http';
import Devtools from 'cerebral/devtools';
import state from './state';
import signals from './signals';
import {signalNames} from './constants';

const controller = Controller({
    devtools: Devtools({remoteDebugger: 'localhost:8880'}),
    state,
    signals,
    providers: [
        HttpProvider({
            baseUrl: '/api',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Accept: 'application/json'
            },
            withCredentials: true
        })
    ]
});

controller.getSignal(signalNames.init)();

export default controller;

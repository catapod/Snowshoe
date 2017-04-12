import React from 'react';
import ReactDOM from 'react-dom';

import {Container} from 'cerebral/react';
import controller from './controller';
import App from './app';

ReactDOM.render(
    <Container controller={controller}><App /></Container>,
    document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './css/app.css';

import store from './store'

// store.dispatch(connect('ws://localhost:8080/v1/json/socket', true));
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

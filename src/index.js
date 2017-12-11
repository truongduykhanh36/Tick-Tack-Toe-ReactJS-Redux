import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './App';
import GameApp from './reducers/index';

const middleware = [];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger());
}

let store = createStore(
    GameApp,
    applyMiddleware(...middleware)
);

ReactDOM.render(
<Provider store = { store }>
    <App />
</Provider>
, document.getElementById('root'));

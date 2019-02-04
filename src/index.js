import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Provider from 'react-redux/es/components/Provider';
import {rootReducer} from './store/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './store/sagas/index'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));
sagaMiddleware.run(mySaga);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();

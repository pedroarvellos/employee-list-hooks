import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import employeeReducer from './store/reducers/employee'
import { watchEmployee } from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReduce = combineReducers({ employeeReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReduce, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchEmployee)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, Store } from 'redux'

import './index.css';
import App from './Containers/App';
import sagas from './Saga'
import rootReducers from './Reducers'
import { IState } from './Interfaces/state';

const sagaMiddleware = createSagaMiddleware()
const store: Store<IState> = createStore(rootReducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
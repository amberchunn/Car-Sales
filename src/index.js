import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);

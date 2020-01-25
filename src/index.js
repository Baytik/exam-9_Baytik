import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import contactsReducer from './store/reducer/contactsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    contacts: contactsReducer
});
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

    const app = (
        <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
        </Provider>
    );

ReactDOM.render(app, document.getElementById('root'));

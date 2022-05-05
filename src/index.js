import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneBookContainerWithRedux from './PhoneDirectoryContainer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactReducer from './Reducer';

const reduxStore = createStore(contactReducer);
ReactDOM.render(
  <Provider store={reduxStore}>
    <PhoneBookContainerWithRedux />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import thunk from 'redux-thunk'

const myStore = createStore(
  reducers, applyMiddleware(thunk)
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
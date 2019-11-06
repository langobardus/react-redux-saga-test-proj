import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducApp from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let store = createStore(reducApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();

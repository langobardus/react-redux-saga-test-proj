import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducApp from './reducers'
import watchFetchDog from './sagas'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducApp, applyMiddleware(sagaMiddleware));
//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
sagaMiddleware.run(watchFetchDog);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();

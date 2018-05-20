import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';

//1. 引入插件
// createStore ==创建store，并且链接 reducer和state

import {createStore}  from 'redux';
import {Provider} from 'react-redux';
import defaultState from './store/state'
import reducer from './store/reducer'

let store = createStore(reducer,defaultState); //创建store




ReactDOM.render(
  <Provider store={store}>
    <App title={1234} />
  </Provider>
  ,
  document.getElementById('root')
);



import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

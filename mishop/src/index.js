import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//引入BrowserRouter
import {BrowserRouter,Route} from 'react-router-dom'
import './assets/js/cookie'

//引入插件
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import defaultState from './store/state'
import reducer from './store/reducer'
//创建store
let store = createStore(reducer,defaultState)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();

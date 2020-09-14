import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    // You can edit the request, but you must return it
    return request;
}, error => Promise.reject(error));

axios.interceptors.response.use(request => {
    // You can edit the request, but you must return it
    return request;
}, error => Promise.reject(error))

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

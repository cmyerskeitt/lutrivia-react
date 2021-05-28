import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import App from './App';
import reducers from './reducers'
import {Provider} from 'react-redux'


const store = createStore(reducers)



ReactDOM.render(
<Provider>
<App />
<Provider/>,document.getElementById('root'));

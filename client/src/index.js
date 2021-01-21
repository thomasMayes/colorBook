import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {MyProvider} from './Provider'


ReactDOM.render(
  <MyProvider>
    <App />
    </MyProvider>
  ,
  document.getElementById('root')
);



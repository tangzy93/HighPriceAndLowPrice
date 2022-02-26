import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootId = 'i-am-super-hero';
let root = document.getElementById(rootId);
if (!root) {
  console.log('创建根节点');
  root = document.createElement('div');
  root.setAttribute('id', rootId);
  document.body.appendChild(root);
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Header from './headers/header';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
    <Header/>
  </div>
);



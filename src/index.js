import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Homepage from './components/Homepage';
import Login from './components/Login';
import './assets/scss/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <div class='backgroung-layer'>
        <div class='triangles'>
          <span></span>
          <span></span>
        </div>
        <div class='circles'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class='squares'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Homepage />
      {/* <Login /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/App';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <div className="App">
      <MyApp />
    </div>,
  document.getElementById('root')
);

serviceWorker.unregister();

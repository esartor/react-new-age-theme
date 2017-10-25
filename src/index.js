// Global Styles
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './services/service-worker';
import Routes from './routes';


ReactDOM.render(
  <Routes />,
  document.getElementById('root'),
);
registerServiceWorker();

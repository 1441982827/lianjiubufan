import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import 'styles/reset.css';
import 'styles/animate.css';

ReactDOM.render(
  <Router>
      <App/>   
  </Router>, 
  document.getElementById('root')
)

serviceWorker.unregister()

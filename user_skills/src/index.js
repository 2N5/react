import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import UserPage from './UserPage';
import NotFound from './NotFound';
import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/user' component={UserPage}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import VendingMachine from './components/vendingMachine/VendingMachine';
import Config from './components/Config';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={VendingMachine} />
    <Route path="config" component={Config} />
  </Route>
);

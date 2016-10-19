import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Page from './components/page';
import VendingMachine from './components/vending-machine';
import Administration from './components/administration';

export default (
  <Route path="/" component={Page}>
    <IndexRoute component={VendingMachine} />
    <Route path="admin" component={Administration} />
  </Route>
);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddClass from './AddClass';
import App from './App';
import NotFound from './NotFound';

// starting with the () below (no {}) will give an implicit return to everything

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path='/add-class' component={AddClass} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
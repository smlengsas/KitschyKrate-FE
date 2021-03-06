import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';

import Home from 'containers/Home';
import Subscribe from 'containers/Subscribe';
import About from 'containers/About';
import NotFound from 'containers/NotFound';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/subscribe' component={Subscribe}/>
      <Route exact path='/about' component={About}/>

      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

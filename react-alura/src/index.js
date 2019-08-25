import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Info from './Pages/Info/Info';
import Authors from './Pages/Authors/Authors';
import Books from './Pages/Books/Books';
import NotFound from './Pages/NotFound/NotFound';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/sobre' component={Info} />
      <Route path='/autores' component={Authors} />
      <Route path='/livros' component={Books} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

import React from 'react';
import dayjs from 'dayjs'
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/home'
import Category from '../../pages/category'
import Search from '../../pages/search'
import Navbar from '../Navbar'
import Header from '../Header'
import Searcher from '../Searcher'


const App = props => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Searcher />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/category/:slug" component={Category}></Route>
        <Route path="/Search/:slug" component={Search}></Route>
      </Switch>
    </Router>
  );
}

export default App;

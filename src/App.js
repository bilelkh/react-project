import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';


import Navbar from './components/Navbar'


import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';



function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route excat path="/" component={Home}></Route>
        <Route excat path="/rooms" component={Rooms}></Route>
        <Route excat path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </Fragment>

  );
}

export default App;

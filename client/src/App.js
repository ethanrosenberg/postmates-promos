import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import SubmitContainer from './containers/SubmitContainer'
import NavigationBar from './components/NavigationBar'

import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavigationBar />

    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/submit" component={SubmitContainer} />
    </Switch>
    </div>
  );
}

export default App;

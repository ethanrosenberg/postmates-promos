import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer'
import SubmitContainer from './containers/SubmitContainer'
import NavigationBar from './components/NavigationBar'
import About from './components/About'
import SliderContainer from './containers/SliderContainer'
import Footer from './containers/FooterContainer'
import LoadingOverlay from 'react-loading-overlay';

import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavigationBar />
    <LoadingOverlay
    active={props.isLoading}
    className="HomeContainer"
    spinner={true}
    text='Loading your content...'
    >
    <Switch>
      <Route exact path="/" component={SliderContainer} />
      <Route exact path="/promos" component={HomeContainer} />
      <Route exact path="/submit" component={SubmitContainer} />
      <Route exact path="/about" component={About} />

    </Switch>
    <Footer />
    </LoadingOverlay>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
}


export default connect(mapStateToProps)(App)

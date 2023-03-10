import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="" pageSize={5} country="in" category="general" /></Route>
            <Route exact path="/business">  <News setProgress={this.setProgress} key="business" pageSize={5} country="in" category="business" /></Route>
            <Route exact path="/entertainment">  <News setProgress={this.setProgress} key="entertainment" pageSize={5} country="in" category="entertainment" /></Route>
            <Route exact path="/general">  <News setProgress={this.setProgress} key="general" pageSize={5} country="in" category="general" /></Route>
            <Route exact path="/health">  <News setProgress={this.setProgress} key="health" pageSize={5} country="in" category="health" /></Route>
            <Route exact path="/science">  <News setProgress={this.setProgress} key="science" pageSize={5} country="in" category="science" /></Route>
            <Route exact path="/sport">  <News setProgress={this.setProgress} key="sport" pageSize={5} country="in" category="sport" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={5} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

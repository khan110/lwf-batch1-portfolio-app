
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactDetails from './components/ContactDetails';
import Project from './components/Project';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/ContactDetails'>
          <ContactDetails/>
        </Route>
        <Route path='/Project'>
          <Project/>
        </Route>
        <Route path='/Home'>
          <Home/>
          </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

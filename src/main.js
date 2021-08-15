import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Chatbot from './components/Chatbot/Chatbot';
import Home from './pages/Home/Home'
import Planet from './pages/Planets/Planet'
import Spacecrafts from './pages/Spacecraft/Spacecrafts';
import SpaceStation3D from "./pages/Spacecraft/3DView/SpaceStation3D"
import Perseverance from "./pages/Spacecraft/3DView/Perseverance3D"
import About from './pages/AboutUs/Aboutus'
import Fade from 'react-reveal/Fade';
import "./App.css"

function Main() {

  return (
    <Router>
      <Fade top>
        <Navbar />
      </Fade>
      <Chatbot />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/planet' exact component={Planet} />
        <Route path='/spacecrafts' exact component={Spacecrafts} />
        <Route path='/spacestation' exact component={SpaceStation3D} />
        <Route path='/perseverance' exact component={Perseverance} />
        <Route path='/about' exact component={About} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Main;

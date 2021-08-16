import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Chatbot from "./components/Chatbot/Chatbot";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Planet from "./pages/Planets/Planet";
import Spacecrafts from "./pages/Spacecraft/Spacecrafts";
import SpaceStation3D from "./pages/Spacecraft/3DView/SpaceStation3D"
import Perseverance from "./pages/Spacecraft/3DView/Perseverance3D"
import About from "./pages/AboutUs/Aboutus";
import Login from "./pages/Login/Login";
import sample from "./assets/shootingstar.mp4";

import "./App.css";

function Main() {
  return (
    <>
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div className="body">
        {" "}
        <Router>
          <Chatbot />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/planet" exact component={Planet} />
            <Route path="/spacecrafts" exact component={Spacecrafts} />
              <Route path='/spacestation' exact component={SpaceStation3D} />
            <Route path='/perseverance' exact component={Perseverance} />
            <Route path="/about" exact component={About} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default Main;

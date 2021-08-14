import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Planet from "./pages/Planets/Planet";
import Spacecrafts from "./pages/Spacecraft/Spacecrafts";
import About from "./pages/AboutUs/Aboutus";
import Login from "./pages/Login/Login";
import Fade from "react-reveal/Fade";
import "./App.css";

function App() {
  return (
    <Router>
      <Fade top>
        <Navbar />
      </Fade>
      <Chatbot />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/planet" exact component={Planet} />
        <Route path="/spacecrafts" exact component={Spacecrafts} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />

        <Redirect to="/" />
      </Switch>
      <Fade bottom>
        <Footer />
      </Fade>
    </Router>
  );
}

export default App;

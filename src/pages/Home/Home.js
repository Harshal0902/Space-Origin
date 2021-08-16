import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import Fade from "react-reveal/Fade";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const history = useHistory();
  return (
    <>
      <Fade top>
        <Navbar />
      </Fade>
      <div className="container">
        <div className="box box-1" onClick={() => history.push("/planet")}>
          <div className="box-inline">
            <h2 className='topic'> Visit <br/> Planets<br/> 🪐</h2>{" "}
          </div>
        </div>
        <div className="box box-2">
          <div className="box-inline">
            <h1 className='mainhead'> Space Origin </h1><br/>
            <h2 className='tagline'>
              {" "}
              Explore the space with us through interactive 3D models and AR
            </h2>
          </div>
        </div>
        <div className="box box-3" onClick={() => history.push("/spacecraft")}>
          <div className="box-inline">
            <h2 className='topic'> Visit <br/> Spacecrafts <br/>🛸</h2>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
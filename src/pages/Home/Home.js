import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
function Home() {
  const history = useHistory();
  return (
    <>
      <div className="container">
        <div className="box box-1" onClick={() => history.push("/planet")}>
          <div className="box-inline">Planet </div>
        </div>
        <div className="box box-2" onClick={() => history.push("/spacecraft")}>
          <div className="box-inline">Spacecraft </div>
        </div>
        <div className="box box-3" onClick={() => history.push("/spacecraft")}>
          <div className="box-inline">Spacecraft </div>
        </div>
      </div>
    </>
  );
}

export default Home;

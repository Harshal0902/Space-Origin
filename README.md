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
            <h2>Planet 🪐</h2>{" "}
          </div>
        </div>
        <div className="box box-2">
          <div className="box-inline">
            <p>
              {" "}
              Aute velit ex tempor exercitation reprehenderit nisi Lorem eu
              pariatur exercitation anim voluptate sit. In laborum pariatur esse
              sunt sunt ut est fugiat officia sunt dolore aliqua. Ipsum nulla
              excepteur pariatur in esse. Enim duis ullamco et officia.
              Reprehenderit culpa veniam enim amet duis elit irure.
            </p>
          </div>
        </div>
        <div className="box box-3" onClick={() => history.push("/spacecraft")}>
          <div className="box-inline">
            <h2>Spacecraft 🛸</h2>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

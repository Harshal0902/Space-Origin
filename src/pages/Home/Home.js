import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.scss";
import Fade from "react-reveal/Fade";
import Navbar from "../../components/Navbar/Navbar";
import { FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";

function Home() {
  const history = useHistory();
  const [isopen, setIsopen] = useState(false);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // function onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }

  return (
    <>
      <Fade top>
        <Navbar />
      </Fade>
      <div className="container">
        <div className="box box-1" onClick={() => history.push("/planet")}>
          <div className="box-inline">
            <h2 className="text-4xl">Planet 🪐</h2>{" "}
          </div>
        </div>
        <div className="box box-2">
          <div className="box-inline">
            <div className="title" onClick={() => setIsopen(true)}>
              {" "}
              {isopen ? (
                <YouTube videoId="dIoDYqG7qu0" opts={opts} />
              ) : (
                <FaPlay className="play" />
              )}
            </div>
            <div className="paragraph">
              <h3 className="text-2xl font-medium">
                Explore the space with us through interactive 3D models and AR
              </h3>
            </div>
          </div>{" "}
        </div>
        <div className="box box-3" onClick={() => history.push("/spacecrafts")}>
          <div className="box-inline">
            <h2 className="text-4xl">Spacecraft 🛸</h2>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

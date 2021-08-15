import React from "react";
import Fade from "react-reveal/Fade";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Aboutus() {
  return (
    <>
      <Fade top>
        <Navbar />
      </Fade>{" "}
      <div className="about-container">
        <div className="desc">
          {" "}
          <p>
            Hello everyone we here the upcoming techies decide to create a
            project for the hackthon which helps the students to learn more
            about the space related things and we people created many amazing
            things which helps the students to deep drive in to the topic of the
            space.
          </p>
        </div>
        <div className="card-body">
          <div className="cards">
            <div className="card">
              <div className="avatar">
                <img
                  src="https://avatars.githubusercontent.com/u/64153988?v=4"
                  alt="adarsh"
                  className="avatar"
                />
              </div>
              <div className="text">
                <strong>Harshal Raikwal</strong>
                <br />
                <br />I like to code things from scratch, and enjoy bringing
                ideas to life in the browser.
              </div>
              <div className="link">
                <span>
                  <a
                    href="https://www.linkedin.com/in/harshalraikwal/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    {" "}
                    <AiFillGithub />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/harshalraikwal/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQHMEsD2Z9o-9A/profile-displayphoto-shrink_400_400/0/1602448822533?e=1634774400&v=beta&t=IUVJzqqwmbseEkNn84ks8WBk49ZQnP3mdQk24UvO9GI"
                  alt="adarsh"
                  className="avatar"
                />
              </div>
              <div className="text">
                <strong>Adarsh Chandran</strong>
                <br />
                <br />I like to code things from scratch, and enjoy bringing
                ideas to life in the browser.
              </div>
              <div className="link">
                <span>
                  <a
                    href="https://github.com/AdarshChandran2000"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    {" "}
                    <AiFillGithub />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/adarsh-chandran-8810b6191/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div>
                {" "}
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQEs-fNxCFmfDQ/profile-displayphoto-shrink_400_400/0/1600956670978?e=1634774400&v=beta&t=W8rey-PpDYiQc9WhKfAr1l0OkfpEFa0wf8RK9j48au8"
                  alt="Gauravsinhaweb"
                  className="avatar"
                />
              </div>
              <div className="text">
                <strong>Gaurav Sinha</strong>
                <br />
                <br />
                Procrastinator by day, Coder by night.
              </div>
              <div className="link">
                <span>
                  <a
                    href="https://github.com/gauravsinhaweb"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    {" "}
                    <AiFillGithub />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/gaurav-sinha-032386187/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="cards">
            <div className="card">
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQGbrcAgp4yosw/profile-displayphoto-shrink_400_400/0/1608278444129?e=1634774400&v=beta&t=2cc5JgYMLYOuXKkFIfQbFvuzl1bOnJhRyGJ6xzpmpp8"
                  alt="teja"
                  className="avatar"
                />
              </div>
              <div className="text">
                <strong>Teja</strong>
                <br />
                <br />
                Practice like you never won Perform like you have never lost.
              </div>
              <div className="link">
                <span>
                  <a
                    href="https://github.com/Teja-07"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    {" "}
                    <AiFillGithub />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/teja-chinitha-34740b202/"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ color: "#000" }}
                  >
                    <AiFillLinkedin />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;

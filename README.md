.container {
  display: flex;
  justify-content: space-around;
}

.box {
  height: 80vh;
  width: 20vw;
  margin: 2rem 1rem;
  cursor: pointer;
}
.box-1 {
  background: url(../../assets/1.PNG) no-repeat;
}
.box-2 {
  background: url(../../assets/2.PNG) no-repeat;
  cursor: default;
}

.box-3 {
  background: url(../../assets/3.png) no-repeat;
}
.box:hover {
  transform: scale(1.05);
  transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.25s;
}
.box-2:hover {
  transform: scale(1);
}
.box-inline {
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
}
.box-inline p {
  font-weight: 400;
  margin-top: 15rem;
  font-size: 18px;
  line-height: 1.7;
  padding: 1rem;
  text-align: justify;
  background: -webkit-linear-gradient(#56585e, #171344);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* .paragraph {
  margin-top: 25rem;
  padding: 1rem;
  text-align: justify;
  color: darkblue;
}
.title {
  position: absolute;
} */

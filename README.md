.desc {
  display: flex;
  justify-content: center;
  color: #eee;
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  line-height: 2;
}
.desc p {
  width: 70%;
}
.about-container {
  height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.card-body {
  height: 80vh;
  display: flex;
  justify-content: space-around;
}
.card {
  user-select: none;
  margin: 2rem;
  height: 350px;
  width: 250px;
  border: 1px solid white;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  flex-direction: column;
  box-shadow: 0 10px 30px rgb(255 255 255 / 50%);
  cursor: default;
}
.card:hover {
  transform: scale(1.05);
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
}
.avatar {
  height: 150px;
  width: 150px;
  background-color: gray;
  border-radius: 100px;

  background-size: cover;

  background-position: top center;
}
.text {
  padding: 1rem;
  text-align: justify;
}
.link {
  color: black;
  font-size: 25px;
  cursor: pointer;
}
.link span {
  padding: 0rem 1rem;
}
.link span:hover {
  font-size: 23px;
}

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sawo from "sawo";
import "./Login.css";

// For localhost: 
 const API_KEY= "c226814e-7ea0-48d0-909a-c05fd6ee58b7";
// const API_KEY = "bf9b6c3d-3a10-4c85-ad24-307404a438d1";

const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});
  const history = useHistory();
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);
  console.log(payload);
  if (isUserLoggedIn) {
    history.push("/home");
  }
  return (
    <>
      <div className="login-container">
        {/* <Navbar/> */}
        <div>
          {" "}
          <h1 className="text-4xl my-4 font-fontVollkorn" style={{ color: "#fff" }}>Space Origin 🌌</h1>
        </div>

        <div className="login-box">
          <div id="sawo-container"></div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

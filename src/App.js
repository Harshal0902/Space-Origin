import { useState, useEffect } from "react";
import Sawo from "sawo";
import Main from "./main"

const API_KEY = "bf9b6c3d-3a10-4c85-ad24-307404a438d1";

const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

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

  return (
    <section>
      {!isUserLoggedIn ? (
        <div className="login-form">
          <div className="formContainer" id="sawo-container"></div>
        </div>
      ) : (
        <Main />
      )}
    </section>
  );
};

export default LoginPage;
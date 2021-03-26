import React from "react";
import { useEffect, useState } from "react";
function App() {
  let { shComp, setShComp } = useState(false);
  let _mountedComp = null;
  if (shComp) {
    _mountedComp = <SecureComp />;
  } else {
    _mountedComp = <Login />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "10%" }}>
      {_mountedComp}
    </div>
  );
}

export default App;

function SecureComp({}) {
  return (
    <div>
      <p>Hi i am secured component </p>
      <button
        onClick={() => {
          alert("logout me");
        }}
      >
        Logout me
      </button>
    </div>
  );
}

function Login({}) {
  return (
    <div>
      <p>you are not logged in</p>
      <button
        onClick={() => {
          alert("login me");
        }}
      >
        Login
      </button>
    </div>
  );
}

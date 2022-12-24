import React, { useEffect, useRef, useState } from "react";
import { Axios } from "axios";
import axios from "axios";

const Signin = () => {
  const [infos, setInfos] = useState("");
  const passRef = useRef();
  const userRef = useRef();
  const token = localStorage.getItem("token11");

  const onSubmit = () => {
    // 52.78.15.205
    //15.164.222.234:3001/users/signup

    fetch("http://52.78.15.205:3001/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: passRef.current.value,
        username: userRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.respdata.token, "token");
        // console.log(passRef.current.value);
        localStorage.setItem("token11", res.respdata.token);
        console.log(res.respdata.token, "response");
        console.log(localStorage.getItem("token11"), "Storage");
      });
  };
  const logoutSubmit = async () => {
    try {
      if (!token) {
        alert("Already logged out!");
        return;
      }
      let resp = await axios.post(
        "http://52.78.15.205:3001/users/logout",
        {},
        {
          headers: { Authorization: token },
        }
      );
      localStorage.removeItem("token11");
      console.log({ resp });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(passRef?.current?.value);

  return (
    <div>
      <h1 style={{ color: "red" }}>Signin</h1>
      <button onClick={onSubmit}>Submit</button>
      <input ref={passRef} type="password" placeholder="password" />
      <input ref={userRef} type="text" placeholder="nickname" />
      <button onClick={logoutSubmit}>Logout</button>
      <h1>{infos}</h1>
    </div>
  );
};

export default Signin;

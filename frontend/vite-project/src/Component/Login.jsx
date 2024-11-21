import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../HandelToken/StoreToken";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handelinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const display = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      let data1 = await response.json();
      console.log(data1);

      if (data1.status) {
        alert(data1.message);
        storeToken(data1.detail);
        navigate("/home");
      }
    } catch (e) {
      console.log("TORI ATUL", e);
    }
  };

  return (
    <div>
      <form onSubmit={display}>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={data.username}
          onChange={handelinput}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          value={data.password}
          onChange={handelinput}
        />{" "}
        <br></br>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const apicheck = async () => {
    try {
      let response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });
      let data1 = await response.json();
      console.log(response);
      console.log(data1);

      if (response.ok) {
        alert("Success");
        setData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        alert("Not success");
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handelinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const display = (e) => {
    e.preventDefault();
    // console.log(user);
    apicheck();
  };

  return (
    <>
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
          type="email"
          placeholder="Enter email"
          name="email"
          value={data.email}
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
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default Register;


//easy method of handleinput
 const handleinput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

//for file input

  const changeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

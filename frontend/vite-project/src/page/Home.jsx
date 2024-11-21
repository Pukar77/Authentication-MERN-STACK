import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [fetchData, setFetchData] = useState("");
  const navigate = useNavigate();
  const getToken = () => {
    return localStorage.getItem("accesstoken");
  };

  const homepage = async () => {
    try {
      let token = getToken();
      if (!token) {
        alert("Login required");
        navigate("/");
      }
      console.log(token);
      let response = await fetch("http://localhost:8000/api/home/welcome", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let data = await response.json();
      console.log(data);
      setFetchData(data.user);
    } catch (e) {
      console.log("Error ", e);
    }
  };

  useEffect(() => {
    homepage();
  }, []);

  return (
    <div>
      welcome to home page, using MERN Stack
      <p>Welcom {fetchData && fetchData.username}</p>
    </div>
  );
}

export default Home;

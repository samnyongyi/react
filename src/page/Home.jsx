import React from "react";
import { useNavigate } from "react-router-dom";
import Temp from "./Temp";
import Temp2 from "./Temp2";

const Home = () => {
  const navigate = useNavigate();

  const Temp = () => {
    navigate("/Temp");
  };
  const Temp2 = () => {
    navigate("/Temp2");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={Temp}>Temp</button>
      <button onClick={Temp2}>Temp2</button>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TempContext from "../components/TempContext";

const Temp2 = () => {
  const navigate = useNavigate();
  const { Value, ChangeValue } = useContext(TempContext);

  const before = () => {
    navigate("/Temp");
  };
  const Home = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>{Value.temp || "null"}</h3>
      <button onClick={before}>Temp</button>
      <button onClick={Home}>Home</button>
    </div>
  );
};

export default Temp2;

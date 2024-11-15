import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./Page.css";
import TempContext from "../components/TempContext";

const Temp = () => {
  const { Value, ChangeValue } = useContext(TempContext);
  const [Count, CountFunc] = useState(Value.temp);
  const navigate = useNavigate();

  const next = () => {
    navigate("/Temp2");
  };

  const increase = () => {
    CountFunc((Count) => {
      const newCount = Count + 1;
      // 매개변수로 Count 객체값을 주고, 그 Count 객체값에 +1을 하는 익명함수(화살표함수)

      ChangeValue({ ...Value, temp: newCount });
      return newCount;
      // 화살표 함수에서 {}를 사용하면 코드 블록이 시작되므로 자동 반환이 되지 않으며, 명시적으로 값을 반환해야 상태가 업데이트
    });
  };
  const decrease = () => {
    CountFunc((Count) => {
      const newCount = Count > 0 ? Count - 1 : 0;
      ChangeValue({ ...Value, temp: newCount });
      return newCount;
    });
  };
  const clear = () => {
    CountFunc(0);
    ChangeValue({ ...Value, temp: 0 });
  };

  return (
    <div>
      <div>
        <div className="func1">
          <button onClick={decrease}>-</button>
          <h3>{Count}</h3>
          <button onClick={increase}>+</button>
        </div>
        <button onClick={clear}>clear</button>
      </div>

      <button onClick={next}>Temp2</button>
    </div>
  );
};

export default Temp;

import { createContext, useState } from "react";

const TempContext = createContext();

const Box = ({ children }) => {
  // {children}을 매개변수로 전달함에 따라서 Box의 Value객체들(temp, temp2...)을 렌더링 가능

  const [Value, ChangeValue] = useState({
    // Value는 초기화할 객체값들
    // ChangeValue는 Value상태를 변경할 수 있는 함수

    temp: 0,
    temp2: null,
  });

  return (
    <TempContext.Provider value={{ Value, ChangeValue }}>
      {children}
    </TempContext.Provider>
  );
};

export { Box };
// {}을 사용함으로서 구체적으로 가져오기 가능

export default TempContext;

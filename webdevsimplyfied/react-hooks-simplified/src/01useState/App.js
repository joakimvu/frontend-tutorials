import { useState } from "react";

function App() {
  // const [state, setState] = useState({ count: 4, theme: "blue" });
  // const count = state.count;
  // const theme = state.theme;
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count - 1 };
    // });
    setCount((prevCount) => prevCount - 1);
    setTheme("blue");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>
        {count}
        {theme}
      </span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

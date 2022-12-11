import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  // const renderCount = useRef(1);
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });
  // const inputRef = useRef();
  // const focus = () => {
  //   inputRef.current.focus();
  // };
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>

      {/* <button onClick={focus}>Focus</button> */}
      {/* <div>I rendered {renderCount.current} times</div> */}
    </>
  );
}

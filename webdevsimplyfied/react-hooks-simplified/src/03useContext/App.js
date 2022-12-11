import React from "react";
import FunctionContextComponent from "./FunctionContextcomponent";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

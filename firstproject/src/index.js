import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>This is first component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

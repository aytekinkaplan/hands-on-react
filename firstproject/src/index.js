import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2>This is first component</h2>;
// }
function Greeting() {
  return (
    <>
      {React.createElement(
        "div",
        { className: "my-container" },
        React.createElement("div", { className: "second-heading" }, "Hello"),
        React.createElement("div", { className: "second-heading" }, "World")
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

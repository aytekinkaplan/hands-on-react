import React from "react";
import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2>This is first component</h2>;
// }
// function Greeting() {
//   return (
//     <>
//       {React.createElement(
//         "div",
//         { className: "my-container" },
//         React.createElement("div", { className: "second-heading" }, "Hello"),
//         React.createElement("div", { className: "second-heading" }, "World")
//       )}
//     </>
//   );
// }

const Greeting = () => {
  return (
    <React.Fragment>
      {React.createElement("h2", {}, "Hello from react")}
      {React.createElement(
        "ul",
        {}, // ul elementinin özellikleri (props) burada boş
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "#" }, "hello") // a tag'ine href eklenmesi
        ),
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "#" }, "world") // a tag'ine href eklenmesi
        ),
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "#" }, "from") // a tag'ine href eklenmesi
        ),
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "#" }, "react") // a tag'ine href eklenmesi
        ),
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "#" }, "universe") // a tag'ine href eklenmesi
        )
      )}
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);

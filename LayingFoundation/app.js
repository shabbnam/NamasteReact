import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement -> React Element (object) -> HTML element(render)
const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello ! from react code"
);

//React element
// JSX -> React.createElement -> React Element (object) -> HTML element(render)
const heading2 = <h1>Namaste React element!!!!!</h1>;

// React component
// React component - function that returns a piece of JSX code
// class based components
// function bsased components
const HeadingComponent = (props) => (
  <h1>
    Namaste React component-- {props.id}
    {heading2}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent id="456" />);

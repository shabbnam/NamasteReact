const heading = React.createElement("h1", { id: "heading" }, "Hello World");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1"),
    React.createElement("h2", {}, "Im h2"),
  ])
);

root.render(parent);

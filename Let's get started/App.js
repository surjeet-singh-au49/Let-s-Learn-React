// const heading = React.createElement("h1",{},"Hello World in React")

const nestedEle = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 "),
    React.createElement("h2", {}, "I am an h1 "), 
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedEle);

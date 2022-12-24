const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading); //element will load up as an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

// document.getElementById("root").innerHTML = "hii"

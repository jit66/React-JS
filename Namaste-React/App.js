import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {                                             // ugly way
//     id: "title",
//     key:"h1"
//   },
//   "Heading 1 for parcel"
// );


const Title = () =>(
  <h1 id="title" key="h1">Namaste React</h1>
)

const abc = 2
const HeaderComponent = () => {
  return (
    <div>
       {/* <Title/>  */}
       {abc}
      <h1>Hello Functional Component</h1>;
      <h2>This is a H2 tag</h2>
    </div>
    )
};

console.log(<HeaderComponent/>); //element will load up as an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);

// document.getElementById("root").innerHTML = "hii"

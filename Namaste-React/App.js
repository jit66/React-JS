import React from "react";
import ReactDOM from "react-dom/client";

///  Q1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const heading1 = React.createElement(
//   "h1",
//   {
//     class:"title"
//   },
//   "I am h1"
// )
// const heading2 = React.createElement(
//   "h2",
//   {
//     class:"title"
//   },
//   "I am h2"
// )
// const heading3 = React.createElement(
//   "h3",
//   {
//     class:"title"
//   },
//   "I am h3"
// )

// const headerElement = React.createElement(
//   "div",
//   {
//     class:"title"
//   },
//   [heading1,heading2,heading3]
// );

// const header = React.createElement(
//   "div",
//   {
//     className: "title",
//   },
//   [
//     React.createElement("h1", { id: "h1"}, "I am h1"),
//     React.createElement("h2", { id: "h2"}, "I am h2"),
//     React.createElement("h3", { id: "h3"}, "I am h3")
//   ]
// );

//Q2. Create same using JSX

//  const header = (
//   <div className="title">

//     <h1>I am H1</h1>
//     <h2>I am H2</h2>
//     <h3>I am H3</h3>

//   </div>
//  )

// Q3. Create a functional component of the same with JSX

// const Header = () => {
//  return(
//  <div className="title">
//     <h1>I am H1</h1>
//     <h2>I am H2</h2>
//     <h3>I am H3</h3>
//  </div>
//  )
// }

// Q4. Add Component inside another

// const Title = () =>(
//   <h1 id="title" key="h1">Namaste React</h1>
// )

// const Header = () => {
//   return (
//     <div>
//        <Title></Title>
//       <h1>Hello Functional Component</h1>;
//       <h2>This is a H2 tag</h2>
//     </div>
//     )
// };

// console.log(<HeaderComponent/>); //element will load up as an object

//Q Header Component with Logo,Icon & Search bar

const Image = () => (
  <img
    height={37}
    src="https://thumbs.dreamstime.com/b/gradient-fire-phoenix-bird-simple-logo-design-black-bird-simple-logo-design-simple-gradient-fire-phoenix-bird-logo-158339374.jpg"
    alt="logo"
    className="logo"
  ></img>
);

const Icon = () => (
  <svg
    height={37}
    width={37}
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z" />
  </svg>
);

const Search = () => (
  <div className="search-container">
    <input type="text" className="search-box" placeholder="Search......"></input>
    <button className="search-icon">Search</button>
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <Image />
      <Search/>
      <Icon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent/>);
root.render(<Header />);

// document.getElementById("root").innerHTML = "hii"

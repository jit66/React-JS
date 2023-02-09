// import { Outlet } from "react-router-dom";
// import Profile from "./ProfileClass";
import ProfileFunc from "./Profile"
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
  constructor(props){
    super(props);

    // console.log("Parent-constructor"); 
  }

  componentDidMount(){

    // console.log("Parent-CompDidMount");
  }

  render() {
    // console.log("Parent-render");

    return(
      <div>
       <h1>About Us Page</h1>

       <UserContext.Consumer>
        {({user})=><h4 className="p-4 m-4 font-bold">{user.name}-{user.email}</h4>}
       </UserContext.Consumer>

       <p>Finding the path for about</p>
       {/* <Outlet/> */}
       {/* <ProfileFunc name={"Jeet"}/> */}
       <ProfileFunc name={"first child"}/>
      </div>
    )

  }

}

export default About;
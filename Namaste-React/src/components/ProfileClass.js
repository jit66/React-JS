import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        userInfo:{
          name:"Dummy Name",
          location: "Dummy Location",
        },
      }
    console.log("child-constructor "+ this.props.name)
  }

  async componentDidMount(){
    // const data = await fetch("https://api.github.com/users/jit66");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo : json,
    // })

    this.timer = setInterval(() =>{
        console.log("Hello")
    },1000);

    console.log("child-componentDidMount " + this.props.name );
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("will unmount");
  }

  render() {
    const { avatar_url,name,location } = this.state.userInfo;
    console.log("child-render " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        
      </div>
    );
  }
}

export default Profile;

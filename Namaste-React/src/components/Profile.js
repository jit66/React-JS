import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);


  useEffect(() => {

    const timer = setInterval(()=>{
            console.log("hello");
        },1000)


    return() =>{
            clearInterval(timer);
            console.log("useEffect Return");
    }

  },[])
  console.log("render");


  return (
    <div>
      <h1>Profile Component Here!!!!</h1>
      <h2>My Name is {props.name}</h2>
      <h3>count :{count}</h3>
      <button 
      onClick={() => {
        setCount(1);
      }}
        >
        Count
        </button>
    </div>
  );
};

export default Profile;

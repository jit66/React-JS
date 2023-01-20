import { useState } from "react";

export const Title = () => (

    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
    />
    </a>
 )
 
const Header = () => {

  const [title,setTitle]= useState("Food Villa")
  const [ isloggedIn, setisLoggedIn]= useState(false);


   return (
     <div className="header">
       <Title/>
       <h1>{title}</h1>
     <div className="nav-items">
       <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
       </ul>
     </div>

    {
      isloggedIn ? (<button onClick={()=> setisLoggedIn(false)}>Logout</button>
      ) 
      :
      (<button onClick={()=> setisLoggedIn(true)}>login</button>
      )
    }
      </div>
      );
 };

 export default Header;
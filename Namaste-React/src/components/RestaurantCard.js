import { IMG_CDN } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ cloudinaryImageId,name,cuisines,avgRating}) =>{
const  {user} = useContext(UserContext)
  return(
      <div className="w-40 p-2 m-2 shadow-lg bg-pink-100 border-separate">
      <img src={IMG_CDN+
      cloudinaryImageId}/>
      <h2 className="font-bold text-lg">{name}</h2>
       <h3 className="overflow-x-hidden">{cuisines.join(", ")}</h3>
      <h4 className=""> {avgRating} stars</h4>
      {/* <h4>{user.name}</h4> */}
      <h5 className="font-bold">{user.name} - {user.email}</h5>

      </div>  
    )
  }

  export default RestaurantCard;
import { IMG_CDN } from "../constants";

const RestaurantCard = ({ cloudinaryImageId,name,cuisines,avgRating}) =>{
    return(
      <div className="w-40 h-60 p-2 m-2 shadow-lg bg-pink-100 border-separate">
      <img src={IMG_CDN+
      cloudinaryImageId}/>
      <h2 className="font-bold text-lg">{name}</h2>
       <h3 className="overflow-x-hidden">{cuisines.join(", ")}</h3>
      <h4 className=""> {avgRating} stars</h4>
      </div>  
    )
  }

  export default RestaurantCard;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();
    // const params = useParams();
    // const {id} = params;
    // console.log(params);

    // const [restName,setRestName] = useState(null)

    const restaurant = useRestaurant(resId) ;


    return (!restaurant) ? <Shimmer/> :
    (
       <div className="menu-card">

        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img width="20%" src={IMG_CDN + restaurant?.cloudinaryImageId}/>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwo}</h3>
            <h3>{restaurant?.totalRatings}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>{
                (Object.values(restaurant?.menu?.items).map((item)=>
                    <li key={item?.id}>{item?.name}</li>
                ))
                }
            </ul>
        </div>
    </div>
    )
};

export default RestaurantMenu;
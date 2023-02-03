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
       <div className="flex">

        <div className="border p-2 m-2 bg-slate-400">
            <img className="w-32 h-32 p-2 m-2 border" width="20%" src={IMG_CDN + restaurant?.cloudinaryImageId}/>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwo}</h3>
            <h3>{restaurant?.totalRatings}</h3>
        </div>
        <div className=" pl-2 mx-15 bg-orange-300"> 
            <h1 className="font-bold text-slate-800 p-2">Menu</h1>
            <ul className="text-lg border">{
                (Object.values(restaurant?.menu?.items).map((item)=>
                    <li className="p-2" key={item?.id}>{item?.name}</li>
                ))
                }
            </ul>
        </div>
    </div>
    )
};

export default RestaurantMenu;
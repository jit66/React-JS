import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {id} = useParams();
    // const params = useParams();
    // const {id} = params;
    // console.log(params);

    const [restName,setRestName] = useState(null)

    useEffect(()=>{

        getRestaurantInfo();

    },[]);

    async function getRestaurantInfo(){
        const data = await fetch 
        ("https://www.swiggy.com/dapi/menu/v4/full?lat=28.6913745&lng=77.1523572&menuId="+id);
        const json = await data.json();
        console.log(json.data);
        setRestName(json.data);

    }

    return (!restName) ? <Shimmer/> :
    (
       <div className="menu-card">

        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restName?.name}</h2>
            <img width="20%" src={IMG_CDN + restName?.cloudinaryImageId}/>
            <h3>{restName?.area}</h3>
            <h3>{restName?.city}</h3>
            <h3>{restName?.avgRating} stars</h3>
            <h3>{restName?.costForTwo}</h3>
            <h3>{restName?.totalRatings}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>{
                (Object.values(restName?.menu?.items).map((item)=>
                    <li key={item?.id}>{item?.name}</li>
                ))
                }
            </ul>
        </div>
    </div>
    )
};

export default RestaurantMenu;
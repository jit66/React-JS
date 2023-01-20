import RestaurantCard from "./RestaurantCard";
import { restList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt,restaurants){

    const filterData = restaurants.filter((restaurant)=>

        restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    )

    return filterData;
}



const Body = () => {

    // let searchTxt = "abc";
    const [allrestaurants,setAllRestaurants] = useState([]);
    const [filterRestaurants,setfilterRestaurants]= useState([]);
    const [ searchTxt,setsearchTxt] = useState("");

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6913745&lng=77.1523572&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setfilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }     

    // const [searchClicked,setsearchClicked] = useState("false");
    if(!allrestaurants) return null;

    // if(filterRestaurants?.length===0) return<h1>Nooo</h1> 
    

    return allrestaurants.length==0 ? (<Shimmer/>)
    : ( 
        <>
        <div className="search-contaainer">

            <input 
             type="text"
             className="search-input" 
             placeholder="Search"
             value={searchTxt}
             onChange={(e)=>{
                setsearchTxt(e.target.value)
             }}
             />
            <button className="search-btn"
             onClick={()=>{

                const data = filterData(searchTxt,allrestaurants);

                setfilterRestaurants(data);
             }}>
                Search</button>

        </div>
      <div className="resto-list">

        {
            (filterRestaurants?.length===0)?<h1>Nooo</h1> 
            :

            filterRestaurants.map((restaurant) =>{
                
                
                
                console.log("render");
                
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                
            })
        }
        
  </div>
        </>
    )
}

export default Body;
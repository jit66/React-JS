import RestaurantCard from "./RestaurantCard";
import { restList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

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
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setfilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }   
    
    // const isOnline = useOnline();

    // if(!isOnline){
    //     return <h1>🔴Offline, Please Check your Internet!!!</h1>
    // }

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
                                
                return (
                    <Link 
                    to={"/restaurant/" + restaurant.data.id}
                    key={restaurant.data.id}
                    >
                    <RestaurantCard {...restaurant.data} />
                   </Link> )
                
            })
        }
        
  </div>
        </>
    )
}

export default Body;
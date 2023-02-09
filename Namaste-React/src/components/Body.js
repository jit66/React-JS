import RestaurantCard from "./RestaurantCard";
import { restList } from "../constants";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {

    // let searchTxt = "abc";
    const [allrestaurants,setAllRestaurants] = useState([]);
    const [filterRestaurants,setfilterRestaurants]= useState([]);
    const [ searchTxt,setsearchTxt] = useState("");
    const {user,setUser} = useContext(UserContext)

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
        <div className="search-contaainer rounded-xl p-1 bg-gray-400 m-2">
            <input 
             type="text"
             className="focus:bg-green-300 p-2 m-2" 
             placeholder="Search"
             value={searchTxt}
             onChange={(e)=>{
                setsearchTxt(e.target.value)
             }}
             />
            <button className="search-btn p-2 m-2 bg-purple-500 hover:bg-purple-200 text-white rounded-xl"
             onClick={()=>{

                const data = filterData(searchTxt,allrestaurants);

                setfilterRestaurants(data);
             }}>
                Search</button>
                <input value={user.name}
                onChange= { e =>{
                    setUser({
                        ...user,
                        name :e.target.value,
                    })
                } }
                >
                </input>
                <input value={user.email}
                onChange= { e =>{
                    setUser({
                        ...user,
                        email :e.target.value,
                    })
                } }
                >
                </input>

        </div>
      <div className="flex flex-wrap justify-between">

        {
            (filterRestaurants?.length===0)?<h1>Nooo</h1> 
            :

            filterRestaurants.map((restaurant) =>{
                                
                return (
                    <Link 
                    to={"/restaurant/" + restaurant.data.id}
                    key={restaurant.data.id}
                    >
                    <RestaurantCard {...restaurant.data} user={user} />
                   </Link> )
                
            })
        }
        
  </div>
        </>
    )
}

export default Body;
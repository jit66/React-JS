import RestaurantCard from "./RestaurantCard";
import { restList } from "../constants";
import { useState } from "react";

function filterData(searchTxt,restaurants){

    const filterData = restaurants.filter((restaurant)=>

        restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    )

    return filterData;
}



const Body = () => {

    // let searchTxt = "abc";
    const [restaurants,setRestaurants] = useState(restList);
    const [ searchTxt,setsearchTxt] = useState("");
    // const [searchClicked,setsearchClicked] = useState("false");
    return( 
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
        {/* <h1>{searchClicked}</h1> */}
            <button className="search-btn"
             onClick={()=>{

                const data = filterData(searchTxt,restaurants);

                setRestaurants(data);
             }}>
                Search</button>

        </div>
      <div className="resto-list">
        {
            restaurants.map((restaurant) =>{
                
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                
            })
        }
  </div>
        </>
    )
}

export default Body;
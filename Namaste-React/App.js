import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (

   <a href="/">
   <img 
   className="logo"
   alt="logo"
   src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
   />
   </a>
)

const Header = () => {
  return (
    <div className="header">
      <Title/>
      <h1>REACTORS</h1>
    <div className="nav-items">
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
      </ul>
    </div>
    </div>
  );
};


// const CafeMarol = {
//   name: " Cafe Marol",
//   cuisines:["Indian","Tandoori"],
//   image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ie8p83hzvps3jtrm0qjg",
//   ratings:"4.2"
// }

// const RestaurantCard = () =>{
//   return(
//     <div className="card">
//     <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ie8p83hzvps3jtrm0qjg"/>
//     <h2>Cafe Marol</h2>
//     <h3>Indian,Tandoori</h3>
//     <h4> 4.2 stars</h4>
//     </div>  
//   )
// }

const restList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "326429",
      "name": "Punjabi Angithi",
      "uuid": "c0119f1a-7c13-4dac-a384-73fcf01be291",
      "city": "4",
      "area": "Ashok Vihar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "lgfkquq3npd3r9oiy62b",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Punjabi",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 5.5,
      "slugs": {
        "restaurant": "punjabi-angithi-ashok-vihar-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop NO. 27, Ground floor, Satyawati Colony, Ashok Vihar, Phase 3, Delhi",
      "locality": "Satyawati Colony",
      "parentId": 4464,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Flat ₹150 off",
        "shortDescriptionList": [
          {
            "meta": "Flat ₹150 off on orders above ₹499",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹150 off on orders above ₹499 | Use code FLAT150",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹150 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLAT150",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Flat ₹150 off on orders above ₹499 | Use code FLAT150",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5400,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5687244~p=1~eid=00000185-9b17-0e8a-210c-9b39006c016f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "326429",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "349931",
      "name": "Billu's Pasta Hut",
      "uuid": "1ab20720-8123-43e9-b362-290d2f7421e0",
      "city": "4",
      "area": "Shakurpur",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "hd6uixw1ykomliddvyap",
      "cuisines": [
        "Continental",
        "Pizzas",
        "Italian"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "shakes-story-tis-hazari-tis-hazari",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "G-56 , 57 Aggarwal Metro Heights , Netaji Subhash Place, New Delhi  ,110018",
      "locality": "Pitampura",
      "parentId": 46040,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹150 on orders above ₹479 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹150 on orders above ₹479 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "349931",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "23568",
      "name": "Baljeet's Amritsari Koolcha",
      "uuid": "d24face4-0a94-49e6-831e-12089905f7f0",
      "city": "4",
      "area": "Nsp",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "upg7qdrabxsiyzvisakn",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "baljeets-amritsari-koolcha-netaji-subhash-place-nsp",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "G-74, Aggarwal Millenium, Tower 2, Netaji Subhash Place, New Delhi",
      "locality": "Netaji Subhash Place",
      "parentId": 2689,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "23568",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "16407",
      "name": "Wah Ji Wah",
      "uuid": "31bc3279-39bc-4d37-87d7-6a87a7cb7e7f",
      "city": "4",
      "area": "Delhi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "zlcrjrhh0v0bqvhr5y92",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 3.799999952316284,
      "slugs": {
        "restaurant": "wah-ji-wah-prashant-vihar-rohini",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "B-12/5 Prashant Vihar opp CRPF school",
      "locality": "Prashant Vihar CRPF School",
      "parentId": 966,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹150 on orders above ₹479 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹150 on orders above ₹479 | Use code JUMBO",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5701817~p=4~eid=00000185-9b17-0e8a-210c-9b3a006c0445",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "16407",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 3.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  }
];

// const RestaurantCard = () =>{
//   return(
//     <div className="card">
//     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//      restList[0].data?.cloudinaryImageId}/>
//     <h2>{restList[0].data?.name}</h2>
//     <h3>{restList[0].data?.cuisines.join(", ")}</h3>
//     <h4> {restList[0].data?.avgRating} stars</h4>
//     </div>  
//   )
// }

// const RestaurantCard = (props) =>{
//   console.log(props);
//   return(
//     <div className="card">
//     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//      props.restaurant.data?.cloudinaryImageId}/>
//     <h2>{props.restaurant.data?.name}</h2>
//     <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//     <h4> {props.restaurant.data?.avgRating} stars</h4>
//     </div>  
//   )
// }

// const RestaurantCard = ({restaurant}) =>{
//   console.log(restaurant);
//   return(
//     <div className="card">
//     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//     restaurant.data?.cloudinaryImageId}/>
//     <h2>{restaurant.data?.name}</h2>
//     <h3>{restaurant.data?.cuisines.join(", ")}</h3>
//     <h4> {restaurant.data?.avgRating} stars</h4>
//     </div>  
//   )
// }

// const RestaurantCard = ({restaurant}) =>{
//   console.log(restaurant);
//   return(
//     <div className="card">
//     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//     restaurant.data?.cloudinaryImageId}/>
//     <h2>{restaurant.data?.name}</h2>
//     <h3>{restaurant.data?.cuisines.join(", ")}</h3>
//     <h4> {restaurant.data?.avgRating} stars</h4>
//     </div>  
//   )
// }

// const RestaurantCard = ({restaurant}) =>{
//   const{ cloudinaryImageId,name,cuisines,avgRating} = restaurant.data;
//   console.log(restaurant);
//   return(
//     <div className="card">
//     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//     cloudinaryImageId}/>
//     <h2>{name}</h2>
//     <h3>{cuisines.join(", ")}</h3>
//     <h4> {avgRating} stars</h4>
//     </div>  
//   )
// }

const RestaurantCard = ({ cloudinaryImageId,name,cuisines,avgRating}) =>{
  return(
    <div className="card">
    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
    cloudinaryImageId}/>
    <h2>{name}</h2>
     <h3>{cuisines.join(", ")}</h3>
    <h4> {avgRating} stars</h4>
    </div>  
  )
}

const Body = () => {

  return( 
    <div className="resto-list">
      {
        restList.map((restaurant) =>{

          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>

        })
      }
</div>
  )
}


// const Body = () => {

//   return( 
//     <div className="resto-list">
//       <RestaurantCard {...restList[0].data}/>
//       <RestaurantCard {...restList[1].data}/>
//       <RestaurantCard {...restList[2].data}/>
//       <RestaurantCard {...restList[3].data}/>
 
// </div>
//   )
// }
// const Body = () => {

//   return( 
//     <div className="resto-list">
//       <RestaurantCard name={restList[1].data.name}  cuisines={restList[1].data.cuisines}/>
//       <RestaurantCard name={restList[2].data.name}  cuisines={restList[2].data.cuisines}/>
//       <RestaurantCard name={restList[3].data.name}  cuisines={restList[3].data.cuisines}/>
//       <RestaurantCard name={restList[0].data.name}  cuisines={restList[0].data.cuisines}/>
 
// </div>
//   )
// }

const Footer = () => {

  return(

    <h1>Footer</h1>
  )
}

const AppLayout = () => {
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>

  )}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

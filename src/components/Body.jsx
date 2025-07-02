import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [SearchText,setSearchText] =useState("")

 
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    console.log(json)
  
    const restaurantCard = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
    );
  
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
    setListOfRestaurants(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus ===false){
    return <h1>you are offline please check your internet Connection</h1>
  }
  //conditional Rendering
  if (ListOfRestaurants.length === 0){
    return <Shimmer/>
  }
  

  const handleTopRatedFilter = () => {
    const filtered = ListOfRestaurants.filter((res) => res.info.avgRating > 4.3);
    console.log(filtered)
    setListOfRestaurants(filtered);
  };

  return (
    <div className="body">
      <div className='filter'>
        
        
        <input 
        type ="text" 
        className='m-2 p-1 border-1' 
        value={SearchText}  
        onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="px-4 py-2 bg bg-green-100 m-4 rounded-lg hover:bg-green-600 shadow-lg cursor-pointer"
        onClick={()=>{
       const filteredRestaurant= ListOfRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase()));
       // console.log(filteredRestaurant)
       setListOfRestaurants(filteredRestaurant)
        }}>Search</button>
       
        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg cursor-pointer" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
        </div>
  

        <div className="flex flex-wrap ">
  {ListOfRestaurants.length === 0 ? (
    <p>No restaurants to display</p>
  ) : (
    ListOfRestaurants.map((restaurant, index) => {
      const id = restaurant?.id || restaurant?.info?.id || index;
      const resdata = restaurant?.info || restaurant;

      return (
        <Link
          to={`/restaurants/${id}`}
          key={id}
          style={{ textDecoration: "none", color: "inherit" , width: "250px",
           display :"flex", flexWrap:"wrap"}}
        >
          <RestaurantCard resdata={resdata} />
        </Link> 
      );
    })
  )}
</div>
    </div>
  );
};

export default Body;

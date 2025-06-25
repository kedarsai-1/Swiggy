import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
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
  
    const restaurantCard = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
    );
  
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
    setListOfRestaurants(restaurants);
  };
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
      <div className="filter">
        
        <input type ="text" className="search-box" value={SearchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button onClick={()=>{
       const filteredRestaurant= ListOfRestaurants.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase()));
       // console.log(filteredRestaurant)
       setListOfRestaurants(filteredRestaurant)
        }}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
  

        <div className="res-container">
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
          style={{ textDecoration: "none", color: "inherit" , width: "200px",
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

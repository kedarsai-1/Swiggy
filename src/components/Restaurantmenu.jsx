import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {
  

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)
  const [showIndex,setshowIndex] = useState(null);
  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage, avgRating } = restaurantInfo;

const {itemCards} = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};
//console.log(resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card);

const categories = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c =>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories);

  return ( 
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <h2 className='font-bold text-lg'>{cuisines?.join(", ")}</h2>
      <h2 >⭐ {avgRating}</h2>
      <h3 >{costForTwoMessage}</h3>
      <ul>
    {categories.map((category,index)=>(
<RestaurantCategory key={category?.card?.card?.title}data={category?.card.card}  showItems = {index  === showIndex ? true:false}
  setshowIndex={()=>{setshowIndex(index)}}
 />

    ))}

</ul>

    </div>
  );
};

export default Restaurantmenu;

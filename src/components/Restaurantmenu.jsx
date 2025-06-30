import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurantmenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)

 

 

  if (!resInfo) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines, costForTwoMessage, avgRating } = restaurantInfo;

  // Safe access to itemCards
  const regularCards =
  resInfo?.data?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

// Extract all itemCards from all sections that have them
const itemCardsSections = regularCards?.filter(
  section => section?.card?.card?.itemCards
) || [];

const allItemCards = itemCardsSections.flatMap(
  section => section.card.card.itemCards
);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h2>⭐ {avgRating}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
  {allItemCards.length > 0 ? (
    allItemCards.map((item, index) => (
      <li key={`${item.card.info.id}-${index}`}>
        {item.card.info.name} - ₹
        {(item.card.info.price || item.card.info.defaultPrice) / 100}
      </li>
    ))
  ) : (
    <li>Menu not available</li>
  )}
</ul>

    </div>
  );
};

export default Restaurantmenu;

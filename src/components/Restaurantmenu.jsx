import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Restaurantmenu = () => {
  const [resInfo, setresinfo] = useState(null);
  const {resId} = useParams();


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MENU_API+ resId);

    const json = await data.json();
    console.log(json);
    setresinfo(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  
  const { name, cuisines, costForTwoMessage, avgRating } =resInfo?.data?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards);
  return (
    <div className="menu">
      
       <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{avgRating}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map(item =>(<li key ={item.card.info.id} >{item.card.info.name} - {item.card.info.price/100}Rs </li>))}
      
      </ul>
    </div>
  );
};

export default Restaurantmenu;
import { CARD_URL } from "../utils/constants";
const RestaurantCard = ({ resdata }) => {
    const {
      name ,
      cuisines,
      costForTwo ,
      avgRating,
      cloudinaryImageId
    } = resdata;
  
    return (
      <div className="res-card">
        <img src ={CARD_URL+cloudinaryImageId} className="res-logo"/>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
        <p>{avgRating} Stars</p>
      </div>
    );
  };
  
  export default RestaurantCard;
  
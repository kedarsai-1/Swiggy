import { CARD_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = resdata;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        src={CARD_URL + cloudinaryImageId}
        className="rounded-lg w-full h-[150px] object-cover"
        alt={name}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating} Stars</p>
    </div>
  );
};

export default RestaurantCard;

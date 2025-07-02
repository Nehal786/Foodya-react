import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRatingString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        className="res-card"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="kfc img"
      />

      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} Star</h4>
    </div>
  );
};

export default RestaurantCard;

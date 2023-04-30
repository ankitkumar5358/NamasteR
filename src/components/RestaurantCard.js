import { IMG_CDN_URL} from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={ IMG_CDN_URL + cloudinaryImageId} alt="bbc" />
      <h3> {name} </h3>
      <h4> {cuisines.slice(0, 2).join(",")} </h4>
      <h4> {lastMileTravelString} ETA </h4>
    </div>
  );
};

export default RestaurantCard;

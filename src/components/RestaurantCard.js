import { IMG_CDN_URL} from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  avgRatingString,
  veg, costForTwo
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={ IMG_CDN_URL + cloudinaryImageId} alt="bbc" />
      <h3> {name} </h3>
      <h4> {cuisines.slice(0, 2).join(",")} </h4>
      <h4> {costForTwo}  </h4>
      { avgRatingString === 0 ? (
       <h4>0 ⭐</h4> 
      ) : 
      <h4> {avgRatingString} ⭐ </h4>
    }
    
    { veg === 'true'  ? (
      <h4> {veg} Veg 🟢 </h4>
    ) : 
    <h4> {veg} Non-Veg🔴 </h4>
     }

    </div>
  );
};

export default RestaurantCard;

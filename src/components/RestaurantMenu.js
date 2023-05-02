import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../constants";
// import useRestaurants from "./useRestaurant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  // const restaurant = useRestaurants(id);
  const restaurant = useRestaurant(id);

  return (!restaurant) ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div>
        <h4>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h4>
        <h4>
          {restaurant?.data?.cards[0]?.card?.card?.info?.locality}{" "}
          {restaurant?.data?.cards[0]?.card?.card?.info?.areaName}
        </h4>
        <img
          alt="restaurant_image"
          src={
            IMG_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>
          {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h2>
      </div>
      <div>
        <h2>Menu Items:</h2>
        <ul>
          {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            ? restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (item) => {
                return <li key={item.card.info.name}>{item.card.info.name}</li>;
              }
            )
            : restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
              ? restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                (item) => {
                  return <li key={item.card.info.name}>{item.card.info.name}</li>;
                }
              )
              : <li>No menu items available</li>
          }
        </ul>

      </div>
    </div>
  );
};
export default RestaurantMenu;
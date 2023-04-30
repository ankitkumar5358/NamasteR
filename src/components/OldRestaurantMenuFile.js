import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const params = useParams();
  // const {resId} = params;
  const { resId } = useParams(); // shortcut to destructure
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.948716&lng=75.785801&menuId=" +
        resId
    );
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.948716&lng=75.785801&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>Restaurant id : {resId}</h1>
        <h2> Restaurant Name : {restaurant.name} </h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3> {restaurant.area} </h3>
        <h3> {restaurant.city} </h3>
        <h3> {restaurant.avgRating} stars </h3>
        <h3> {restaurant.costForTwoMsg} </h3>
      </div>
      <div>
        {/* {console.log(Object.values(restaurant.menu.items))} */}
        <h1>Menu</h1>
        {/* <ul>
          {Object.values(restaurant.menu.items).map((item) => (
            <li key={item.id}> {item.name} </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default RestaurantMenu;

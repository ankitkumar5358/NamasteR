import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import "../../App.css";
import { RESTAURANTS_URL } from "../constants";
import filterData from "./filterData";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState("");
  const [restaurants, setRestaurant] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const res = await fetch(RESTAURANTS_URL);
    const json = await res.json();
    

    setRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setAllRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-input"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurant(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard name={RestaurantList[0].info.name} cuisines={RestaurantList[0].info.cuisines}/> */}
        {/* <RestaurantCard {...RestaurantList[0].info}/> */}
        {restaurants.length === 0 ? (
          <h1>No Restaurant with matching name found!</h1>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

/* Old Restaurant Commit - 29 april
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.948716&lng=75.785801&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
*/

export default Body;

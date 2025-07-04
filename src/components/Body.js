import { useEffect, useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurantData) {
//   console.log("checking", restaurantData);
  const filteredData = restaurantData.filter((restaurants) =>
    restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filteredData;
}

// function handleError(searchText, setRestaurantData) {
//   if (!searchText) {
//     setRestaurantData(restaurantList);
//   }
// }



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
    console.log("useEffect render")

  },[searchText])

  async function getRestaurants () {
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    
   }
   console.log("first render")

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food"
          value={searchText}
        //   onKeyUp={() => {
        //     handleError(searchText, setRestaurantData);
        //   }}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

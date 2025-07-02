import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const[searchText, setSearchText] = useState("");
    
  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
        }}/>
        <button className="search-btn">Search</button>
    </div>
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
    </>
  );
};

export default Body;

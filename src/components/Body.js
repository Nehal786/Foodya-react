import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";


function filterData(searchText,restaurantData) {
    console.log("from filter fn", restaurantData);

    

   const filteredData= restaurantData.filter((restaurants) => restaurants.info.name.includes(searchText));
   return filteredData;

}

const Body = () => {
    const[searchText, setSearchText] = useState("");
    const[restaurantData,setRestaurantData] = useState(restaurantList);
    // console.log(restaurantData);
    
  return (
    <>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
        }}/>
        <button className="search-btn" onClick={() => {
            const data = filterData(searchText,restaurantData);
            setRestaurantData(data);
        }}>Search</button>
    </div>
    <div className="restaurant-list">
      {restaurantData.map((restaurant) => {
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
      })}
    </div>
    </>
  );
};

export default Body;

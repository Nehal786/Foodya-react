import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState({});
    const {id} = useParams();
    console.log(id)
    useEffect(() => {
        getRestaurantInfo();

    },[])

    async function getRestaurantInfo() {
        const data =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5804163&lng=88.376133&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json();
console.log(json?.data?.cards[2]?.card?.card?.info)
setRestaurantMenu(json?.data?.cards[2]?.card?.card?.info)

    }
    return (
        <div className="Restaurant-menu">
        <div>Restaurant Id : {restaurantMenu.id}</div>
        <p>Restaurant Name : {restaurantMenu.name}</p>
        <img src = {IMG_CDN_URL + restaurantMenu.cloudinaryImageId} style={{width:"200px",borderRadius:"5px"}}/>
        <h3>{restaurantMenu.areaName}</h3>
        <h3>{restaurantMenu.city}</h3>
        <h4>{restaurantMenu.costForTwoMessage}</h4>
        </div>
    )
}


export default RestaurantMenu;
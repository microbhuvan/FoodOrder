import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="app-body">
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = listOfRes.filter(
            (res) => res.info.rating.aggregate_rating >= 4
          );
          setListOfRes(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

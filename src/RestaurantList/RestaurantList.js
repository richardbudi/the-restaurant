import React, {Component} from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import Header from '../Header/Header'
import './RestaurantList.css';
import {  faSortAmountUp, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantList extends Component {

render(){
  const {
    restaurants,
    error,
    handleDetails,
    handleSortRatingAscending,
    handleSortRatingDescending,
    filterByRatingLow,
    filterByRatingHigh
  } = this.props
  

  return(
    <div >
    <Header />
    <h2 id="restaurant-list" className="m-heading text-center py-2">List of Restaurants</h2>
    <div id="options">
      <div id="sort">
        <button className="sort-rating btn" onClick={handleSortRatingAscending}>Sort by Rating <FontAwesomeIcon icon={faSortAmountDown}/></button>
        <button className="sort-price btn" onClick={handleSortRatingDescending}>Sort by Rating <FontAwesomeIcon icon={faSortAmountUp}/></button>
      </div>
      <div id="filter">
        <button className="filter-rating1 btn" onClick={filterByRatingLow}>Filter Rating {"<"} 4</button>
        <button className="filter-rating2 btn" onClick={filterByRatingHigh}>Filter Rating {">"} 4</button>    
      </div>
    </div>
      <div className="container">
        {error ? (
            <h1 className="text-danger text-center">{error}</h1>
          ) : (
          restaurants.map(resto => {
            return <RestaurantItem 
            handleDetails={()=>handleDetails(0, resto.id)}
            resto={resto}/>;
          })
        )}
      </div>
    </div>
  )
}
}

export default RestaurantList;
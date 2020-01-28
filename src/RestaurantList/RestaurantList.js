import React, {Component} from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
class RestaurantList extends Component {
render(){
  const {
    restaurants,
    error,
    handleDetails,
    handleSortRating,
    handleSortPrice,
    filterByRating
  } = this.props


  return(
    <div >
    <Header />
    <h2 id="restaurant-list" className="m-heading text-center py-2">List of Restaurants</h2>
      <button className="sort-rating" onClick={handleSortRating}>Sort by Rating</button>
      <button className="sort-price" onClick={handleSortPrice}>Sort by Price</button>
      <button className="filter-rating" onClick={filterByRating}>Filter by Rating</button>

    <div className="row">
        <div className="container my-3">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3" />
            <div className="row">
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
        </div>
      </div>
      </div>
  )
}
}

export default RestaurantList;
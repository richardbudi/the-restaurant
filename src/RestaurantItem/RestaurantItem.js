import React, {Component} from 'react';
import './RestaurantItem.css';
import '../App.css';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantItem extends Component {
   
  render() {
    const {
      resto,
      handleDetails
    } =this.props
    
    // Number of dollars icon for the price level
    let dollars = "";

    switch(resto.price_level) {
      case 1:
        dollars = <FontAwesomeIcon icon={faDollarSign}/>
        break;
      case 2:
        dollars = <span>
          <FontAwesomeIcon icon={faDollarSign}/> 
          <FontAwesomeIcon icon={faDollarSign}/>
        </span>
        ;
        break;
      case 3:
        dollars = <span>
          <FontAwesomeIcon icon={faDollarSign}/> 
          <FontAwesomeIcon icon={faDollarSign}/>
          <FontAwesomeIcon icon={faDollarSign}/>
        </span>
        ;
      break;
    }

    return(
      <div >
        <div>
          <h2 className="bg-dark px-3">
            {resto.name}
         </h2>      
        </div>
        <div className="container description-list p-1 bg-light">
            <div className="description-img">              
              <img src={resto.photo} alt="food"/>
            </div>
            <div className="description-detail">
              <h4>Price: {dollars}</h4>
              <h4>Rating: {resto.rating}</h4>   
              <button className="btn" onClick ={handleDetails}>Show more</button>         
            </div>
        </div>
      </div>   
    ) ;
  }
}

export default RestaurantItem;
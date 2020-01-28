import React, {Component} from 'react';
import './RestaurantItem.css';
import '../App.css';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantItem extends Component {
   
  render() {
    const {
      resto,
      handleDetails
    } =this.props
    
    
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
    // <FontAwesomeIcon icon={faDollarSign}/>.repeat(resto.price_level);

    return(
      <div >
        <div>
          <h2 className="bg-dark px-3">
            {resto.name}
         </h2>      
        </div>
        <div className="container description p-1 bg-light">
            <div className="descrestoription-img px-1">              
              <img src={resto.photo} alt="food"/>
            </div>
            <div className="description-detail">
              <h4>Price: {dollars}</h4>
              <h4>Rating: {resto.rating}</h4>   
              <button className="btn" onClick ={handleDetails}>Show more</button>         
              {/* <Link to={ROUTES.DETAILS} id={resto.id} class="show-more btn btn-light">Show More</Link> */}
            </div>
        </div>
      </div>   
    ) ;
  }
}

export default RestaurantItem;
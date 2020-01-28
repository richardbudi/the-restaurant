import React, {Component} from 'react';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './RestaurantDetails.css';
 
class RestaurantDetails extends Component{
  state={
    details:[],
  }
  
  async componentDidMount() {
    const id = this.props.id;
    console.log(this.state.details);
    const url = "http://localhost:3000/api/restaurant/"+id;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState(
        () => {
          return {details: jsonData};
        },
        () => {}
      );
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    const  {
      opening_hours,
      id,
      name,
      photo,
      phone_number,
      rating,
      google_maps_url,
      website
    } = this.state.details


    
    // Interface fot the opening hours
    let output = ''; 
    // openingHours.forEach(element => output += `<li> ${element}</li>`);

    let dollars = "";

    switch(this.state.details.price_level) {
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
    // console.log(opening_hours);
    // var array = opening_hours.split(",");

    
    return(
  
      <div className="detail">
        <div>
          <h2 class="bg-primary px-3">
          {id}. {name}
          </h2>      
        </div>
        <div class="description p-1 bg-light">
            <div class="description-img px-1">              
              <img src={photo} alt="food"/>
            </div>
            <div class="description-detail">
              <h4>Price: {dollars}</h4>
              <h4>Rating: {rating}</h4>
              <h4>Phone Number: {phone_number}</h4>
              <h4 >Opening Hours: </h4>
              <ul class = "px-1">
              {/* {opening_hours.map((item, index) => {
                  return (
                    <li className="list-group-item text-slanted" key={index}>
                      {item}
                    </li>
                  );
                })} */}
                {opening_hours}
                  

              </ul>
              <a href={google_maps_url} target="_blank" class="btn">Open Location</a>
              <a href={website} target="_blank" class="btn">Website</a>
            </div>
        </div>
      </div>           
    
    
    ) ;
  }

  // showDetail(){
  //   <Link>
  //   </Link>
  // }
 }

export default RestaurantDetails;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Contact from './ContactUs/ContactUs';
import RestaurantList from './RestaurantList/RestaurantList';
import Nav from './Nav/Nav';
import RestaurantItem from './RestaurantItem/RestaurantItem'
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';
import {restaurants} from './ContactUs/dummyResto'

class App extends Component{

  state = {
    url: 'http://localhost:3000/api/list',
    restaurants: restaurants,
    error: '',
    pageIndex:1,
    details_id:1
    
  };

  
  async getRestaurants() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.length === 0) {
        this.setState(() => {
          return {error: 'sorry, but your search did not return any results'};
        });
      } else {
        this.setState({
          restaurants: jsonData,
  
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount(){
    this.getRestaurants();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <RestaurantList
           restaurants = {this.state.restaurants}
           error ={this.state.error}
           handleDetails ={this.handleDetails}
           handleSortRating = {this.handleSortRating}
           handleSortPrice={this.handleSortPrice}
           filterByRating={this.filterByRating}
          />
          
        );
      case 0:
        return (
          <RestaurantDetails
          id = {this.state.details_id}
          handleIndex ={this.handleIndex}/>
        
        );
    }
  };



  handleIndex = index =>{
    this.setState({
      pageIndex:index,
    })
  }

  handleDetails =(index, id) =>{
    this.setState({
      pageIndex:index,
      details_id:id
    })
  }
 
  handleSortRating =()=>{
  this.setState({
    restaurants: this.state.restaurants.sort((a,b)=>{
      return(a.rating-b.rating)
    })
  })
  console.log(this.state.restaurants);
}

 
handleSortPrice =()=>{
  this.setState({
    restaurants: this.state.restaurants.sort((a,b)=>{
      return(a.id-b.id)
    })
  })
  console.log(this.state.restaurants);
}

filterByRating =()=>{
  this.setState({
    restaurants:this.state.restaurants.filter(filtered => filtered.rating>4.2)
  })
  console.log(this.state.restaurants);
  
}
  
  render() {
    return (
     <div >
       <Nav/>
       {this.displayPage(this.state.pageIndex)}
       <Contact/>
     </div>
    );
  }
}

export default App;
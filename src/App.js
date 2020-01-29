import React, { Component } from 'react';
import './App.css';
import Contact from './ContactUs/ContactUs';
import RestaurantList from './RestaurantList/RestaurantList';
import Nav from './Nav/Nav';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';

class App extends Component{

  state = {
    url: 'http://localhost:3000/api/list',
    restaurants: [],
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
          return {error: 'Sorry, but there is something wrong with the server'};
        });
      } else {
        this.setState({
          restaurants: jsonData
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
      case 1:
        return (
          <RestaurantList
           restaurants = {this.state.restaurants}
           error ={this.state.error}
           handleDetails ={this.handleDetails}
           handleSortRatingAscending = {this.handleSortRatingAscending}
           handleSortRatingDescending = {this.handleSortRatingDescending}
           handleSortPrice={this.handleSortPrice}
           filterByRatingLow={this.filterByRatingLow}
           filterByRatingHigh={this.filterByRatingHigh}
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
 
  handleSortRatingAscending =()=>{
  this.setState({
    restaurants: this.state.restaurants.sort((a,b)=>{
      return(a.rating-b.rating)
    })
  })
  console.log(this.state.restaurants);
}

  handleSortRatingDescending =()=>{
  this.setState({
    restaurants: this.state.restaurants.sort((b,a)=>{
      return(a.rating-b.rating)
    })
  })
  console.log(this.state.restaurants);
}
 
filterByRatingLow =()=>{
  this.setState({
    restaurants:this.state.restaurants.filter(filtered => filtered.rating<4)
  })
  console.log(this.state.restaurants);
}
filterByRatingHigh =()=>{
  this.setState({
    restaurants:this.state.restaurants.filter(filtered => filtered.rating>4)
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
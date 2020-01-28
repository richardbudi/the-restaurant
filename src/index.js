import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';
import Header from './Header/Header';
import Contact from './ContactUs/ContactUs';
import RestaurantList from './RestaurantList/RestaurantList';
import Nav from './Nav/Nav';
// const AppBase = () => (
//   <div>
//     <Switch>
//     <Route exact path={ROUTES.HOME} render={() => 
//     <div>
//      <Header />      
//      <RestaurantList />
//      <Contact />
//      </div>
// }
    
//     />
//       <Route exact path={ROUTES.DETAILS} render={() => <RestaurantDetails/>}/>
//     </Switch>
//   </div>
// )
ReactDOM.render(
<BrowserRouter>
 
  <App/>
  {/* <AppBase/> */}
</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

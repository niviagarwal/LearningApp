import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import Products from './Products'
import Cart from './Cart';
import Payment from './Payment';
import Checkout from './Checkout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Categories from './Categories.js';
import AppBar2 from './material-components/AppBar2.js';
import HomeFragnance from './material-components/HomeFragnance.js';


function AppRouter() {
    return (
       <React.Fragment>
           <BrowserRouter>
          {/* {window.location.href.split('/')[3]!=='login' &&  <AppBar2/>} */}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/categories" component={Categories}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/homefragnance" component={HomeFragnance}/>
                    <Route exact path="/products" component={Products}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route exact path="/payment" component={Payment}/>

                </Switch>
           </BrowserRouter>
           
       </React.Fragment>   
    );
  }
  
  export default AppRouter;
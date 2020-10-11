import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Categories from './Categories.js';

function AppRouter() {
    return (
       <React.Fragment>
           <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/categories" component={Categories}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
           </BrowserRouter>
           
       </React.Fragment>   
    );
  }
  
  export default AppRouter;
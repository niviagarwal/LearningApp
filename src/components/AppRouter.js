import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Categories from './Categories.js';
import AppBar2 from './material-components/AppBar2.js';
import HomeFragnance from './material-components/HomeFragnance.js';

function AppRouter() {
    return (
       <React.Fragment>
           <BrowserRouter>
          {window.location.href.split('/')[3]!=='login' &&  <AppBar2/>}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/categories" component={Categories}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/homefragnance" component={HomeFragnance}/>
                </Switch>
           </BrowserRouter>
           
       </React.Fragment>   
    );
  }
  
  export default AppRouter;
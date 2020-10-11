import {
    LOGIN,
    LOGOUT
  } from './actionTypes';
  
  const initState = {
    loggedIn: false,
  };
  
  export const loginState = (state = initState, action = {}) => {
    switch (action.type) {
      case LOGIN:
        return { 
          ...state,
          loggedIn: true
        };
  
      case LOGOUT:
        return Object.assign({}, state, {
            loggedIn: false
        });
  
      default:
        return state;
    }
  };
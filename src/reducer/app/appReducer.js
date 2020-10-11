import {
    EXAMPLE_1,
    EXAMPLE_2
  } from './actionTypes';
  
  const initState = {
    ex: false,
  };
  
  export const appState = (state = initState, action = {}) => {
    switch (action.type) {
      case EXAMPLE_1:
        return { 
          ...state,
          ex: true 
        };
  
      case EXAMPLE_2:
        return Object.assign({}, state, {
          ex: action.payload,
        });
  
      default:
        return state;
    }
  };
  
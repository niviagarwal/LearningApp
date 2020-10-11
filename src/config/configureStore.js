//import { reducer as formReducer } from 'redux-form';
import { appState } from '../reducer/app/appReducer';
import { loginState } from '../reducer/login/loginReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { connectRouter } from 'connected-react-router';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const middlewares = [routerMiddleware(history), thunkMiddleware];
  //const middlewares = [thunkMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(
    createReducer(history),
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
}

export function createReducer(history) {
  return combineReducers({
    router : connectRouter(history),
    appState,
    loginState
  });
  
}


//import { reducer as formReducer } from 'redux-form';
import { appState } from '../reducer/app/appReducer';
import { loginState } from '../reducer/login/loginReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { connectRouter } from 'connected-react-router';
//import browserHistory from './history';

export default function configureStore(initialState = {}, history) {
  //let composeEnhancers = compose;
  const middlewares = [routerMiddleware(history), thunkMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  // if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  // if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  //   /* eslint-disable no-underscore-dangle */
  //   if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  // }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );
//const store = createStore(rootReducer, defaultState, enhancers);
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
    loginState,
  });
  
}


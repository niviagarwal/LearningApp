import React from 'react';
import configureStore from './config/configureStore';
import './App.css';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';
import theme from './config/theme';
//import CssBaseline from '@material-ui/core/CssBaseline';
import history from './config/history';
import AppRouter from './components/AppRouter.js';

const store = configureStore({}, history);
function App() {
  return (
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
         <MuiThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <AppRouter />
        </MuiThemeProvider> 
      {/* </ConnectedRouter> */}
    </Provider>
  );
}

export default App;

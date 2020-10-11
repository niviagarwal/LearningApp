import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from './material-components/AppBar'
import AppBar2 from './material-components/AppBar2'
import history from '../config/history';
import { push } from 'connected-react-router';
import Button from '@material-ui/core/Button';

function Home() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()

    const handleCandleClick = () => {
        dispatch(push('/categories'));
        //history.push('/categories')
    }

    return (
       <React.Fragment>
           {/* <AppBar/> */}
           <AppBar2 handleCandleClick = {handleCandleClick}/>

            <Button variant="contained" color="primary" onClick ={handleCandleClick}>
                Primary
            </Button>
       </React.Fragment>   
    );
  }
  
  export default Home;
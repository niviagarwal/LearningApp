import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from './material-components/AppBar'
import AppBar2 from './material-components/AppBar2'

function Categories() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()

    return (
       <React.Fragment>
           <AppBar/>
           <AppBar2/>
           <Container>
               Categories
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                
            </Container>
       </React.Fragment>   
    );
  }
  
  export default Categories;
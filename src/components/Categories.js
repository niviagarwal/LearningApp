import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';

function Categories() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()

    return (
       <React.Fragment>
           <Container>
               Categories
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                
            </Container>
       </React.Fragment>   
    );
  }
  
  export default Categories;
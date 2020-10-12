import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import {useHistory, withRouter} from 'react-router-dom'

import Button from '@material-ui/core/Button';

function Checkout() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history =  useHistory();

    return (
       <React.Fragment>
           <Button variant="contained" color="secondary" >
           Confirmation
        </Button>
       </React.Fragment>   
    );
  }
  
  export default Checkout;
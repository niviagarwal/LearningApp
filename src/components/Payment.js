import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import {useHistory, withRouter} from 'react-router-dom'

import Button from '@material-ui/core/Button';

function Payment() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history =  useHistory()
    const onCategoriesButton = () => {
      history.push('/confirmation');
  }

    return (
       <React.Fragment>
           <Button variant="contained" color="secondary" onClick={onCategoriesButton}>
           Payment
        </Button>
       </React.Fragment>   
    );
  }
  
  export default Payment;
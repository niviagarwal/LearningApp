import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';

function Cart() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history =  useHistory()
    const onCategoriesButton = () => {
      history.push('/checkout');
  }

    return (
       <React.Fragment>
           <Button variant="contained" color="secondary" onClick={onCategoriesButton}>
           Cart
        </Button>
       </React.Fragment>   
    );
  }
  
  export default Cart;
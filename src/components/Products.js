import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import {useHistory, withRouter} from 'react-router-dom'

import Button from '@material-ui/core/Button';

function Products() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history =  useHistory()
    const onCategoriesButton = () => {
      history.push('/cart');
  }

    return (
       <React.Fragment>
           <Button variant="contained" color="secondary" onClick={onCategoriesButton}>
           Products
        </Button>
       </React.Fragment>   
    );
  }
  
  export default Products;
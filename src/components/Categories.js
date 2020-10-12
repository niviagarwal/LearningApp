import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import {useHistory, withRouter} from 'react-router-dom'

import Button from '@material-ui/core/Button';

function Categories() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history =  useHistory()
    const onCategoriesButton = () => {
      //getApiCall();
      // const data = {"name" : "react",
      // "hey" : "kjfhg"};
      // dispatch(setApiData(data))
      history.push('/products');
  }

    return (
       <React.Fragment>
           <Button variant="contained" color="secondary" onClick={onCategoriesButton}>
             Categories
        </Button>
       </React.Fragment>   
    );
  }
  
  export default Categories;
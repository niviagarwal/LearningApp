import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {useHistory, withRouter} from 'react-router-dom'

function Home() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history = useHistory()

    const onHomeButton = () => {
        history.push('/login')
    }

    return (
       <React.Fragment>
            Home
            <Button variant="contained" color="primary" onClick={onHomeButton}> 
                Primary
            </Button>
       </React.Fragment>   
    );
  }
  
  export default Home;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {useHistory, withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { setApiData } from '../reducer/app/appActions'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
function Home() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()
    const history = useHistory()

    const onHomeButton = () => {
        //getApiCall();
        // const data = {"name" : "react",
        // "hey" : "kjfhg"};
        // dispatch(setApiData(data))
        history.push('/categories');
    }
    const classes = useStyles();
    return (
       <React.Fragment>
            
            <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" fullWidth/>
                    <Button variant="contained" color="primary" onClick={onHomeButton}> 
                        Primary
                    </Button>
            </form>

       </React.Fragment>   
    );
  }
  
  export default Home;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Home() {
    const appState = useSelector(state => state.appState)
    const dispatch = useDispatch()

    return (
       <React.Fragment>
            Home
       </React.Fragment>   
    );
  }
  
  export default Home;
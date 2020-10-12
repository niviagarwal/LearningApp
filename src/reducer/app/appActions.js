import {
    EXAMPLE_1,
    EXAMPLE_2,
    API_CALL_DATA
  } from './actionTypes';

const setExample1 = (userObj) => {
    return {
        type: EXAMPLE_1,
        payload: userObj
    }
}

const setExample2 = () => {
    return {
        type: "EXAMPLE_2"
    }
}

export const setApiData = (payload) => {
    return {
        type : API_CALL_DATA,
        payload: payload
    }
}

export  {
    setExample1,
    setExample2
}
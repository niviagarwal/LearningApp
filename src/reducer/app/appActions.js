import {
    EXAMPLE_1,
    EXAMPLE_2
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

export default {
    setExample1,
    setExample2
}
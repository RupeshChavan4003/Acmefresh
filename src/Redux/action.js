import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get("https://acmebackend1.herokuapp.com/data")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_FAILURE });
    });
};

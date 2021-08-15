import axios from "axios";
import {
  MONEDA_FETCH_REQUEST,
  MONEDA_FETCH_SUCCESS,
  MONEDA_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** Get Moneda *******************************/
export const getMoneda =
  ({ idMoneda }) =>
  async (dispatch) => {
    dispatch({
      type: MONEDA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/monedas/" + idMoneda,
        config
      );

      dispatch({
        type: MONEDA_FETCH_SUCCESS,
        payload: res.data.data.moneda,
      });
    } catch (error) {
      dispatch({ type: MONEDA_FETCH_FAIL });
    }
  };

/*************************** Get All Moneda *******************************/
export const getAllMoneda = () => async (dispatch) => {
  dispatch({
    type: MONEDA_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/monedas/", config);

    dispatch({
      type: MONEDA_FETCH_SUCCESS,
      payload: res.data.data.moneda,
    });
  } catch (error) {
    dispatch({ type: MONEDA_FETCH_FAIL });
  }
};

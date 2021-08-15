import axios from "axios";
import {
  NIVELCARRERA_FETCH_REQUEST,
  NIVELCARRERA_FETCH_SUCCESS,
  NIVELCARRERA_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** Get NivelCarrera *******************************/
export const getNivelCarrera =
  ({ idNivelCarrera }) =>
  async (dispatch) => {
    dispatch({
      type: NIVELCARRERA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/nivelCarrera/" + idNivelCarrera,
        config
      );

      dispatch({
        type: NIVELCARRERA_FETCH_SUCCESS,
        payload: res.data.data.nivelCarrera,
      });
    } catch (error) {
      dispatch({ type: NIVELCARRERA_FETCH_FAIL });
    }
  };

/*************************** Get All Nivel Carrera *******************************/
export const getAllNivelCarrera = () => async (dispatch) => {
  dispatch({
    type: NIVELCARRERA_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/nivelCarrera/", config);

    dispatch({
      type: NIVELCARRERA_FETCH_SUCCESS,
      payload: res.data.data.nivelCarrera,
    });
  } catch (error) {
    dispatch({ type: NIVELCARRERA_FETCH_FAIL });
  }
};

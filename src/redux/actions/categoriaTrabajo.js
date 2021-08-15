import axios from "axios";
import {
  CATEGORIATRABAJO_FETCH_REQUEST,
  CATEGORIATRABAJO_FETCH_SUCCESS,
  CATEGORIATRABAJO_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** Get CategoriaTrabajo *******************************/
export const getCategoriaTrabajo =
  ({ idCategoriaTrabajo }) =>
  async (dispatch) => {
    dispatch({
      type: CATEGORIATRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/categoriaTrabajo/" + idCategoriaTrabajo,
        config
      );

      dispatch({
        type: CATEGORIATRABAJO_FETCH_SUCCESS,
        payload: res.data.data.categoriaTrabajo,
      });
    } catch (error) {
      dispatch({ type: CATEGORIATRABAJO_FETCH_FAIL });
    }
  };

/*************************** Get All Categoria Empresa *******************************/
export const getAllCategoriaTrabajo = () => async (dispatch) => {
  dispatch({
    type: CATEGORIATRABAJO_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/categoriaTrabajo/", config);

    dispatch({
      type: CATEGORIATRABAJO_FETCH_SUCCESS,
      payload: res.data.data.categoriaTrabajo,
    });
  } catch (error) {
    dispatch({ type: CATEGORIATRABAJO_FETCH_FAIL });
  }
};

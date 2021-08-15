import axios from "axios";
import {
  LENGUAJE_FETCH_REQUEST,
  LENGUAJE_FETCH_SUCCESS,
  LENGUAJE_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddLenguaje *******************************/
export const addLenguaje =
  ({ descripcion, nivel, idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: LENGUAJE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      descripcion,
      nivel,
      idDesempleo,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/lenguajes/", body, config);

      dispatch({
        type: LENGUAJE_FETCH_SUCCESS,
        payload: res.data.data.lenguaje,
      });
    } catch (error) {
      dispatch({ type: LENGUAJE_FETCH_FAIL });
    }
  };

/*************************** Get Lenguaje *******************************/
export const getLenguaje =
  ({ idLenguaje }) =>
  async (dispatch) => {
    dispatch({
      type: LENGUAJE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/lenguajes/" + idLenguaje,
        config
      );

      dispatch({
        type: LENGUAJE_FETCH_SUCCESS,
        payload: res.data.data.lenguaje,
      });
    } catch (error) {
      dispatch({ type: LENGUAJE_FETCH_FAIL });
    }
  };

/*************************** Get All Lenguaje *******************************/
export const getAllLenguaje = () => async (dispatch) => {
  dispatch({
    type: LENGUAJE_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/lenguajes/", config);

    dispatch({
      type: LENGUAJE_FETCH_SUCCESS,
      payload: res.data.data.lenguaje,
    });
  } catch (error) {
    dispatch({ type: LENGUAJE_FETCH_FAIL });
  }
};

/*************************** update Lenguaje *******************************/
export const updateLenguaje =
  ({ descripcion, nivel, idLenguaje }) =>
  async (dispatch) => {
    dispatch({
      type: LENGUAJE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      descripcion,
      nivel,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/lenguajes/" + idLenguaje,
        body,
        config
      );

      dispatch({
        type: LENGUAJE_FETCH_SUCCESS,
        payload: res.data.data.lenguaje,
      });
    } catch (error) {
      dispatch({ type: LENGUAJE_FETCH_FAIL });
    }
  };

/*************************** delete Lengujae *******************************/
export const deleteLenguaje =
  ({ idLenguaje, idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: LENGUAJE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const body = JSON.stringify({
      idDesempleo,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/lenguajes/" + idLenguaje,
        config
      );

      dispatch({
        type: LENGUAJE_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: LENGUAJE_FETCH_FAIL });
    }
  };

import axios from "axios";
import {
  IDENTIFICACION_FETCH_REQUEST,
  IDENTIFICACION_FETCH_SUCCESS,
  IDENTIFICACION_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddIdentificacion *******************************/
export const addIdentificacion =
  ({ tipoIdentificacion, descripcion, idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: IDENTIFICACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      tipoIdentificacion,
      descripcion,
      idUsuario,
    });

    try {
      const res = await axios.post(
        API_BASE_URL + "/identificacion/",
        body,
        config
      );

      dispatch({
        type: IDENTIFICACION_FETCH_SUCCESS,
        payload: res.data.data.identificacion,
      });
    } catch (error) {
      dispatch({ type: IDENTIFICACION_FETCH_FAIL });
    }
  };

/*************************** Get Identificacion *******************************/
export const getIdentificacion =
  ({ idIdentificacion }) =>
  async (dispatch) => {
    dispatch({
      type: IDENTIFICACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/identificacion/" + idIdentificacion,
        config
      );

      dispatch({
        type: IDENTIFICACION_FETCH_SUCCESS,
        payload: res.data.data.identificacion,
      });
    } catch (error) {
      dispatch({ type: IDENTIFICACION_FETCH_FAIL });
    }
  };

/*************************** Get All Identificacion *******************************/
export const getAllIdentificacion = () => async (dispatch) => {
  dispatch({
    type: IDENTIFICACION_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/identificacion/", config);

    dispatch({
      type: IDENTIFICACION_FETCH_SUCCESS,
      payload: res.data.data.identificacion,
    });
  } catch (error) {
    dispatch({ type: IDENTIFICACION_FETCH_FAIL });
  }
};

/*************************** update Identificacion *******************************/
export const updateIdentificacion =
  ({ tipoIdentificacion, descripcion, idIdentificacion }) =>
  async (dispatch) => {
    dispatch({
      type: IDENTIFICACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      tipoIdentificacion,
      descripcion,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/identificacion/" + idIdentificacion,
        body,
        config
      );

      dispatch({
        type: IDENTIFICACION_FETCH_SUCCESS,
        payload: res.data.data.identificacion,
      });
    } catch (error) {
      dispatch({ type: IDENTIFICACION_FETCH_FAIL });
    }
  };

/*************************** delete Identificacion *******************************/
export const deleteIdentificacion =
  ({ idIdentificacion }) =>
  async (dispatch) => {
    dispatch({
      type: IDENTIFICACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/identificacion/" + idIdentificacion,
        config
      );

      dispatch({
        type: IDENTIFICACION_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: IDENTIFICACION_FETCH_FAIL });
    }
  };

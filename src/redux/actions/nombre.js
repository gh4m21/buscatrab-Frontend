import axios from "axios";
import {
  NOMBRE_FETCH_REQUEST,
  NOMBRE_FETCH_SUCCESS,
  NOMBRE_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddNombre *******************************/
export const addNombre =
  ({ nombre, apellidoMadre, apellidoPadre, idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: NOMBRE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      nombre,
      apellidoMadre,
      apellidoPadre,
      idUsuario,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/nombres/", body, config);

      dispatch({
        type: NOMBRE_FETCH_SUCCESS,
        payload: res.data.data.nombre,
      });
    } catch (error) {
      dispatch({ type: NOMBRE_FETCH_FAIL });
    }
  };

/*************************** Get Nombre *******************************/
export const getNombre =
  ({ idNombre }) =>
  async (dispatch) => {
    dispatch({
      type: NOMBRE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/nombres/" + idNombre,
        config
      );

      dispatch({
        type: NOMBRE_FETCH_SUCCESS,
        payload: res.data.data.nombre,
      });
    } catch (error) {
      dispatch({ type: NOMBRE_FETCH_FAIL });
    }
  };

/*************************** Get All Nombre *******************************/
export const getAllNombre = () => async (dispatch) => {
  dispatch({
    type: NOMBRE_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/nombres/", config);

    dispatch({
      type: NOMBRE_FETCH_SUCCESS,
      payload: res.data.data.nombres,
    });
  } catch (error) {
    dispatch({ type: NOMBRE_FETCH_FAIL });
  }
};

/*************************** update Nombre *******************************/
export const updateNombre =
  ({ nombre, apellidoMadre, apellidoPadre, idNombre }) =>
  async (dispatch) => {
    dispatch({
      type: NOMBRE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      nombre,
      apellidoMadre,
      apellidoPadre,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/nombres/" + idNombre,
        body,
        config
      );

      dispatch({
        type: NOMBRE_FETCH_SUCCESS,
        payload: res.data.data.nombre,
      });
    } catch (error) {
      dispatch({ type: NOMBRE_FETCH_FAIL });
    }
  };

/*************************** delete Nombre *******************************/
export const deleteNombre =
  ({ idNombre }) =>
  async (dispatch) => {
    dispatch({
      type: NOMBRE_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/nombres/" + idNombre,
        config
      );

      dispatch({
        type: NOMBRE_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: NOMBRE_FETCH_FAIL });
    }
  };

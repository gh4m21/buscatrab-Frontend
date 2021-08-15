import axios from "axios";
import {
  FORMACION_FETCH_REQUEST,
  FORMACION_FETCH_SUCCESS,
  FORMACION_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddFormacion *******************************/
export const addFormacion =
  ({
    nombreInstituto,
    carrera,
    fechaInicial,
    fechaFinal,
    nivel,
    descripcion,
    idDesempleo,
  }) =>
  async (dispatch) => {
    dispatch({
      type: FORMACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      nombreInstituto,
      carrera,
      fechaInicial,
      fechaFinal,
      nivel,
      descripcion,
      idDesempleo,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/formacion/", body, config);

      dispatch({
        type: FORMACION_FETCH_SUCCESS,
        payload: res.data.data.formacion,
      });
    } catch (error) {
      dispatch({ type: FORMACION_FETCH_FAIL });
    }
  };

/*************************** Get Formacion *******************************/
export const getFormacion =
  ({ idFormacion }) =>
  async (dispatch) => {
    dispatch({
      type: FORMACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/formacion/" + idFormacion,
        config
      );

      dispatch({
        type: FORMACION_FETCH_SUCCESS,
        payload: res.data.data.formacion,
      });
    } catch (error) {
      dispatch({ type: FORMACION_FETCH_FAIL });
    }
  };

/*************************** Get All Formacion *******************************/
export const getAllFormacion = () => async (dispatch) => {
  dispatch({
    type: FORMACION_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/formacion/", config);

    dispatch({
      type: FORMACION_FETCH_SUCCESS,
      payload: res.data.data.formacion,
    });
  } catch (error) {
    dispatch({ type: FORMACION_FETCH_FAIL });
  }
};

/*************************** update Formacion *******************************/
export const updateFormacion =
  ({
    nombreInstituto,
    carrera,
    fechaInicial,
    fechaFinal,
    nivel,
    descripcion,
    idFormacion,
  }) =>
  async (dispatch) => {
    dispatch({
      type: FORMACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      nombreInstituto,
      carrera,
      fechaInicial,
      fechaFinal,
      nivel,
      descripcion,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/formacion/" + idFormacion,
        body,
        config
      );

      dispatch({
        type: FORMACION_FETCH_SUCCESS,
        payload: res.data.data.formacion,
      });
    } catch (error) {
      dispatch({ type: FORMACION_FETCH_FAIL });
    }
  };

/*************************** delete Formacion *******************************/
export const deleteFormacion =
  ({ idFormacion, idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: FORMACION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const body = JSON.stringify({ idDesempleo });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/formacion/" + idFormacion,
        config
      );

      dispatch({
        type: FORMACION_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: FORMACION_FETCH_FAIL });
    }
  };

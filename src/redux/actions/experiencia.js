import axios from "axios";
import {
  EXPERIENCIA_FETCH_REQUEST,
  EXPERIENCIA_FETCH_SUCCESS,
  EXPERIENCIA_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddExperiencia *******************************/
export const addExperiencia =
  ({
    puesto,
    fechaInicial,
    fechaFinal,
    empresa,
    descripcion,
    isTrabajoActivo,
    idDesempleo,
  }) =>
  async (dispatch) => {
    dispatch({
      type: EXPERIENCIA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      puesto,
      fechaInicial,
      fechaFinal,
      empresa,
      descripcion,
      isTrabajoActivo: isTrabajoActivo === "si" ? true : false,
      idDesempleo,
    });

    if (parseInt(fechaInicial, 10) > parseInt(fechaFinal, 10)) {
      dispatch({ type: EXPERIENCIA_FETCH_FAIL });
      return;
    }

    try {
      const res = await axios.post(
        API_BASE_URL + "/experiencias/",
        body,
        config
      );

      dispatch({
        type: EXPERIENCIA_FETCH_SUCCESS,
        payload: res.data.data.experiencia,
      });
    } catch (error) {
      dispatch({ type: EXPERIENCIA_FETCH_FAIL });
    }
  };

/*************************** Get Experiencia *******************************/
export const getExperiencia =
  ({ idExperiencia }) =>
  async (dispatch) => {
    dispatch({
      type: EXPERIENCIA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/experiencias/" + idExperiencia,
        config
      );

      dispatch({
        type: EXPERIENCIA_FETCH_SUCCESS,
        payload: res.data.data.experiencia,
      });
    } catch (error) {
      dispatch({ type: EXPERIENCIA_FETCH_FAIL });
    }
  };

/*************************** Get All Experiencia *******************************/
export const getAllExperiencia = () => async (dispatch) => {
  dispatch({
    type: EXPERIENCIA_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/experiencias/", config);

    dispatch({
      type: EXPERIENCIA_FETCH_SUCCESS,
      payload: res.data.data.experiencia,
    });
  } catch (error) {
    dispatch({ type: EXPERIENCIA_FETCH_FAIL });
  }
};

/*************************** update Experiencia *******************************/
export const updateExperiencia =
  ({
    puesto,
    fechaInicial,
    fechaFinal,
    empresa,
    descripcion,
    isTrabajoActivo,
    idExperiencia,
  }) =>
  async (dispatch) => {
    dispatch({
      type: EXPERIENCIA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      puesto,
      fechaInicial,
      fechaFinal,
      empresa,
      descripcion,
      isTrabajoActivo: isTrabajoActivo === "si" ? true : false,
    });

    if (parseInt(fechaInicial, 10) > parseInt(fechaFinal, 10)) {
      dispatch({ type: EXPERIENCIA_FETCH_FAIL });
      return;
    }
    
    try {
      const res = await axios.put(
        API_BASE_URL + "/experiencias/" + idExperiencia,
        body,
        config
      );

      dispatch({
        type: EXPERIENCIA_FETCH_SUCCESS,
        payload: res.data.data.experiencia,
      });
    } catch (error) {
      dispatch({ type: EXPERIENCIA_FETCH_FAIL });
    }
  };

/*************************** delete Experiencia *******************************/
export const deleteExperiencia =
  ({ idExperiencia, idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: EXPERIENCIA_FETCH_REQUEST,
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
        API_BASE_URL + "/experiencias/" + idExperiencia,
        config
      );

      dispatch({
        type: EXPERIENCIA_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: EXPERIENCIA_FETCH_FAIL });
    }
  };

import axios from "axios";
import {
  REFERENCIA_FETCH_REQUEST,
  REFERENCIA_FETCH_SUCCESS,
  REFERENCIA_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddReferencia *******************************/
export const addReferencia =
  ({ nombre, empresa, telefono, email, notas, idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: REFERENCIA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      nombre,
      empresa,
      telefono,
      email,
      notas,
      idDesempleo,
    });

    try {
      const res = await axios.post(
        API_BASE_URL + "/referencias/",
        body,
        config
      );

      dispatch({
        type: REFERENCIA_FETCH_SUCCESS,
        payload: res.data.data.referencia,
      });
    } catch (error) {
      dispatch({ type: REFERENCIA_FETCH_FAIL });
    }
  };

/*************************** Get Referencia *******************************/
export const getReferencia =
  ({ idReferencia }) =>
  async (dispatch) => {
    dispatch({
      type: REFERENCIA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/referencias/" + idReferencia,
        config
      );

      dispatch({
        type: REFERENCIA_FETCH_SUCCESS,
        payload: res.data.data.referencia,
      });
    } catch (error) {
      dispatch({ type: REFERENCIA_FETCH_FAIL });
    }
  };

/*************************** Get All Referencia *******************************/
export const getAllReferencia = () => async (dispatch) => {
  dispatch({
    type: REFERENCIA_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/referencias/", config);

    dispatch({
      type: REFERENCIA_FETCH_SUCCESS,
      payload: res.data.data.referencia,
    });
  } catch (error) {
    dispatch({ type: REFERENCIA_FETCH_FAIL });
  }
};

/*************************** update Referencia *******************************/
export const updateReferencia =
  ({ nombre, empresa, telefono, email, notas, idReferencia }) =>
  async (dispatch) => {
    dispatch({
      type: REFERENCIA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      nombre,
      empresa,
      telefono,
      email,
      notas,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/referencias/" + idReferencia,
        body,
        config
      );

      dispatch({
        type: REFERENCIA_FETCH_SUCCESS,
        payload: res.data.data.referencia,
      });
    } catch (error) {
      dispatch({ type: REFERENCIA_FETCH_FAIL });
    }
  };

/*************************** delete Referencia *******************************/
export const deleteReferencia =
  ({ idReferencia, idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: REFERENCIA_FETCH_REQUEST,
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
        API_BASE_URL + "/referencias/" + idReferencia,
        config
      );

      dispatch({
        type: REFERENCIA_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: REFERENCIA_FETCH_FAIL });
    }
  };

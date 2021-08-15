import axios from "axios";
import {
  DESEMPLEO_FETCH_REQUEST,
  DESEMPLEO_FETCH_SUCCESS,
  DESEMPLEO_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddDesempleo *******************************/
export const addDesempleo =
  ({
    _usuario,
    fechaNacimiento,
    lugarDeNacimiento,
    estadoMatrimonial,
    profesion,
  }) =>
  async (dispatch) => {
    dispatch({
      type: DESEMPLEO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      _usuario,
      fechaNacimiento,
      lugarDeNacimiento,
      estadoMatrimonial,
      profesion,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/desempleos/", body, config);

      dispatch({
        type: DESEMPLEO_FETCH_SUCCESS,
        payload: res.data.data.desempleo,
      });
    } catch (error) {
      dispatch({ type: DESEMPLEO_FETCH_FAIL });
    }
  };

/*************************** Get Desempleo *******************************/
export const getDesempleo =
  ({ idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: DESEMPLEO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/desempleos/" + idDesempleo,
        config
      );

      dispatch({
        type: DESEMPLEO_FETCH_SUCCESS,
        payload: res.data.data.desempleo,
      });
    } catch (error) {
      dispatch({ type: DESEMPLEO_FETCH_FAIL });
    }
  };

/*************************** Get All Desempleo *******************************/
export const getAllDesempleo = () => async (dispatch) => {
  dispatch({
    type: DESEMPLEO_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/desempleos/", config);

    dispatch({
      type: DESEMPLEO_FETCH_SUCCESS,
      payload: res.data.data.desempleos,
    });
  } catch (error) {
    dispatch({ type: DESEMPLEO_FETCH_FAIL });
  }
};

/*************************** update Desempleo *******************************/
export const updateDesempleo =
  ({
    fechaNacimiento,
    lugarDeNacimiento,
    estadoMatrimonial,
    profesion,
    idDesempleo,
  }) =>
  async (dispatch) => {
    dispatch({
      type: DESEMPLEO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      fechaNacimiento,
      lugarDeNacimiento,
      estadoMatrimonial,
      profesion,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/desempleos/" + idDesempleo,
        body,
        config
      );

      dispatch({
        type: DESEMPLEO_FETCH_SUCCESS,
        payload: res.data.data.desempleo,
      });
    } catch (error) {
      dispatch({ type: DESEMPLEO_FETCH_FAIL });
    }
  };

/*************************** delete Desempleo *******************************/
export const deleteDesempleo =
  ({ idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: DESEMPLEO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/desempleos/" + idDesempleo,
        config
      );

      dispatch({
        type: DESEMPLEO_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: DESEMPLEO_FETCH_FAIL });
    }
  };

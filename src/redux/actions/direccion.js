import axios from "axios";
import {
  DIRECCION_FETCH_REQUEST,
  DIRECCION_FETCH_SUCCESS,
  DIRECCION_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddDireccion *******************************/
export const addDireccion =
  ({ pais, region, ciudad, calle, codigoPostal, idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: DIRECCION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      pais,
      region,
      ciudad,
      calle,
      codigoPostal,
      idUsuario,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/direccion/", body, config);

      dispatch({
        type: DIRECCION_FETCH_SUCCESS,
        payload: res.data.data.direccion,
      });
    } catch (error) {
      dispatch({ type: DIRECCION_FETCH_FAIL });
    }
  };

/*************************** Get Direccion *******************************/
export const getDireccion =
  ({ idDireccion }) =>
  async (dispatch) => {
    dispatch({
      type: DIRECCION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/direccion/" + idDireccion,
        config
      );

      dispatch({
        type: DIRECCION_FETCH_SUCCESS,
        payload: res.data.data.direccion,
      });
    } catch (error) {
      dispatch({ type: DIRECCION_FETCH_FAIL });
    }
  };

/*************************** Get All Direccion *******************************/
export const getAllDireccion = () => async (dispatch) => {
  dispatch({
    type: DIRECCION_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/direccion/", config);

    dispatch({
      type: DIRECCION_FETCH_SUCCESS,
      payload: res.data.data.direccion,
    });
  } catch (error) {
    dispatch({ type: DIRECCION_FETCH_FAIL });
  }
};

/*************************** update Direccion *******************************/
export const updateDireccion =
  ({ pais, region, ciudad, calle, codigoPostal, idDireccion }) =>
  async (dispatch) => {
    dispatch({
      type: DIRECCION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      pais,
      region,
      ciudad,
      calle,
      codigoPostal,
      idDireccion,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/direccion/" + idDireccion,
        body,
        config
      );

      dispatch({
        type: DIRECCION_FETCH_SUCCESS,
        payload: res.data.data.direccion,
      });
    } catch (error) {
      dispatch({ type: DIRECCION_FETCH_FAIL });
    }
  };

/*************************** delete Direccion *******************************/
export const deleteDireccion =
  ({ idDireccion, idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: DIRECCION_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      idUsuario,
    });

    try {
      const res = await axios.delete(
        API_BASE_URL + "/direccion/" + idDireccion,
        body,
        config
      );

      dispatch({
        type: DIRECCION_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: DIRECCION_FETCH_FAIL });
    }
  };

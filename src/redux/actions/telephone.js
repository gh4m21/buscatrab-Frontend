import axios from "axios";
import {
  TELEPHONE_FETCH_REQUEST,
  TELEPHONE_FETCH_SUCCESS,
  TELEPHONE_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";

/*************************** AddTelephone *******************************/
export const addTelephone =
  ({ tel, telephoneType, idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: TELEPHONE_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      descripcion: tel,
      tipoTelefono: telephoneType,
      idUsuario,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/telefonos/", body, config);

      dispatch({
        type: TELEPHONE_FETCH_SUCCESS,
        payload: res.data.data.telefono,
      });
    } catch (error) {
      dispatch({ type: TELEPHONE_FETCH_FAIL });
    }
  };

/*************************** Get Telephone *******************************/
export const getTelephone =
  ({ idPhone }) =>
  async (dispatch) => {
    dispatch({
      type: TELEPHONE_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/telefonos/" + idPhone,
        config
      );

      dispatch({
        type: TELEPHONE_FETCH_SUCCESS,
        payload: res.data.data.telefono,
      });
    } catch (error) {
      dispatch({ type: TELEPHONE_FETCH_FAIL });
    }
  };

/*************************** Get All Telephone *******************************/
export const getAllTelephone = () => async (dispatch) => {
  dispatch({
    type: TELEPHONE_FETCH_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(API_BASE_URL + "/telefonos/", config);

    dispatch({
      type: TELEPHONE_FETCH_SUCCESS,
      payload: res.data.data.telefonos,
    });
  } catch (error) {
    dispatch({ type: TELEPHONE_FETCH_FAIL });
  }
};

/*************************** update Telephone *******************************/
export const updateTelephone =
  ({ tel, telephoneType, idPhone }) =>
  async (dispatch) => {
    dispatch({
      type: TELEPHONE_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      descripcion: tel,
      tipoTelefono: telephoneType,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/telefonos/" + idPhone,
        body,
        config
      );

      dispatch({
        type: TELEPHONE_FETCH_SUCCESS,
        payload: res.data.data.telefono,
      });
    } catch (error) {
      dispatch({ type: TELEPHONE_FETCH_FAIL });
    }
  };

/*************************** deleteTelephone *******************************/
export const deleteTelephone =
  ({ idPhone }) =>
  async (dispatch) => {
    dispatch({
      type: TELEPHONE_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/telefonos/" + idPhone,
        config
      );

      dispatch({
        type: TELEPHONE_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: TELEPHONE_FETCH_FAIL });
    }
  };

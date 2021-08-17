import axios from "axios";
import {
  USUARIO_FETCH_REQUEST,
  USUARIO_FETCH_SUCCESS,
  USUARIO_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** Get Usuario *******************************/
export const getUsuario = (idUsuario) => async (dispatch) => {
  dispatch({
    type: USUARIO_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let res;
    if (idUsuario) {
      res = await axios.get(
        API_BASE_URL + "/profile/getOneById/" + idUsuario,
        config
      );
    } else {
      res = await axios.get(API_BASE_URL + "/profile/getOneByToken", config);
    }

    dispatch({
      type: USUARIO_FETCH_SUCCESS,
      payload: res.data.data.profile,
    });
  } catch (error) {
    dispatch({ type: USUARIO_FETCH_FAIL });
  }
};

/*************************** Get All Usuario *******************************/
export const getAllUsuario = () => async (dispatch) => {
  dispatch({
    type: USUARIO_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/usuarios/getAll", config);

    dispatch({
      type: USUARIO_FETCH_SUCCESS,
      payload: res.data.data.usuario,
    });
  } catch (error) {
    dispatch({ type: USUARIO_FETCH_FAIL });
  }
};

/*************************** update Usuario *******************************/
export const updateUsuario =
  ({
    email,
    acercaDe,
    sitioWeb,
    isActivado,
    isNotifSms,
    isNotifEmail,
    isBan,
    idUsuario,
  }) =>
  async (dispatch) => {
    dispatch({
      type: USUARIO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
      acercaDe,
      sitioWeb,
      isActivado,
      isNotifSms,
      isNotifEmail,
      isBan,
    });

    if (!idUsuario) {
      return dispatch({ type: USUARIO_FETCH_FAIL });
    }

    try {
      const res = await axios.put(
        API_BASE_URL + "/usuarios/edit/" + idUsuario,
        body,
        config
      );

      dispatch({
        type: USUARIO_FETCH_SUCCESS,
        payload: res.data.data.usuario,
      });
    } catch (error) {
      dispatch({ type: USUARIO_FETCH_FAIL });
    }
  };

/*************************** update Usuario *******************************/
export const updateFoto = (formData, idUsuario) => async (dispatch) => {
  dispatch({
    type: USUARIO_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  if (!idUsuario) {
    return dispatch({ type: USUARIO_FETCH_FAIL });
  }

  try {
    const res = await axios.put(
      API_BASE_URL + "/usuarios/editFoto/" + idUsuario,
      formData,
      config
    );

    dispatch({
      type: USUARIO_FETCH_SUCCESS,
      payload: res.data.data.usuario,
    });
  } catch (error) {
    dispatch({ type: USUARIO_FETCH_FAIL });
  }
};

/*************************** delete Usuario *******************************/
export const deleteUsuario =
  ({ idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: USUARIO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/usuarios/delete/" + idUsuario,
        config
      );

      dispatch({
        type: USUARIO_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: USUARIO_FETCH_FAIL });
    }
  };

import axios from "axios";
import {
  SOLICITUDTRABAJO_FETCH_REQUEST,
  SOLICITUDTRABAJO_FETCH_SUCCESS,
  SOLICITUDTRABAJO_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddSolicitudTrabajo *******************************/
export const addSolicitudTrabajo =
  ({ _publicacionTrabajo, _desempleo, _cv, motivacion }) =>
  async (dispatch) => {
    dispatch({
      type: SOLICITUDTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      _publicacionTrabajo,
      _desempleo,
      _cv,
      motivacion,
    });

    try {
      const res = await axios.post(
        API_BASE_URL + "/solicitudtrabajo/",
        body,
        config
      );

      dispatch({
        type: SOLICITUDTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.solicitudTrabajo,
      });
    } catch (error) {
      dispatch({ type: SOLICITUDTRABAJO_FETCH_FAIL });
    }
  };

/*************************** Get SolicitudTrabajo *******************************/
export const getSolicitudTrabajo =
  ({ idUsuario, idPublicacionTrabajo, idSolicitudTrabajo }) =>
  async (dispatch) => {
    dispatch({
      type: SOLICITUDTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let res;
    try {
      if (idSolicitudTrabajo) {
        res = await axios.get(
          API_BASE_URL + "/solicitudtrabajo/" + idSolicitudTrabajo,
          config
        );
      } else {
        const body = JSON.stringify({ idPublicacionTrabajo, idUsuario });
        res = await axios.post(
          API_BASE_URL + "/solicitudtrabajo/ByUsuarioAndPublicacion/",
          body,
          config
        );
      }

      dispatch({
        type: SOLICITUDTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.solicitudTrabajo,
      });
    } catch (error) {
      dispatch({ type: SOLICITUDTRABAJO_FETCH_FAIL });
    }
  };

/*************************** Get All SolicitudTrabajo *******************************/
export const getAllSolicitudTrabajo =
  (idPublicacionTrabajo) => async (dispatch) => {
    dispatch({
      type: SOLICITUDTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/customSolicitudTrabajo/" + idPublicacionTrabajo,
        config
      );

      dispatch({
        type: SOLICITUDTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.solicitudTrabajo,
      });
    } catch (error) {
      dispatch({ type: SOLICITUDTRABAJO_FETCH_FAIL });
    }
  };

/*************************** Get All SolicitudTrabajo By desempleo *******************************/
export const getAllSolicitudTrabajoByDesempleo =
  ({ idDesempleo }) =>
  async (dispatch) => {
    dispatch({
      type: SOLICITUDTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/customSolicitudTrabajo/byDesempleo/" + idDesempleo,
        config
      );

      dispatch({
        type: SOLICITUDTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.solicitudTrabajo,
      });
    } catch (error) {
      dispatch({ type: SOLICITUDTRABAJO_FETCH_FAIL });
    }
  };

/*************************** update SolicitudTrabajo *******************************/
export const updateSolicitudTrabajo =
  ({
    _publicacionTrabajo,
    _desempleo,
    _cv,
    _interview,
    motivacion,
    isAceptado,
    idSolicitudTrabajo,
  }) =>
  async (dispatch) => {
    dispatch({
      type: SOLICITUDTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      _publicacionTrabajo,
      _desempleo,
      _cv,
      _interview,
      motivacion,
      isAceptado,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/solicitudtrabajo/" + idSolicitudTrabajo,
        body,
        config
      );

      dispatch({
        type: SOLICITUDTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.solicitudTrabajo,
      });
    } catch (error) {
      dispatch({ type: SOLICITUDTRABAJO_FETCH_FAIL });
    }
  };

/*************************** delete SolicitudTrabajo *******************************/
export const deleteSolicitudTrabajo =
  ({ idSolicitudTrabajo }) =>
  async (dispatch) => {
    dispatch({
      type: SOLICITUDTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/solicitudtrabajo/" + idSolicitudTrabajo,
        config
      );

      dispatch({
        type: SOLICITUDTRABAJO_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: SOLICITUDTRABAJO_FETCH_FAIL });
    }
  };

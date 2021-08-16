import axios from "axios";
import {
  INTERVIEW_FETCH_REQUEST,
  INTERVIEW_FETCH_SUCCESS,
  INTERVIEW_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";

/*************************** AddInterview *******************************/
export const addInterview =
  ({ fecha, hora, asignacionTo, idSolicitudTrabajo }) =>
  async (dispatch) => {
    dispatch({
      type: INTERVIEW_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      fecha,
      hora,
      asignacionTo,
      idSolicitudTrabajo,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/interview/", body, config);

      dispatch({
        type: INTERVIEW_FETCH_SUCCESS,
        payload: res.data.data.interview,
      });
    } catch (error) {
      dispatch({ type: INTERVIEW_FETCH_FAIL });
    }
  };

/*************************** Get Interview *******************************/
export const getInterview =
  ({ idInterview }) =>
  async (dispatch) => {
    dispatch({
      type: INTERVIEW_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/interview/" + idInterview,
        config
      );

      dispatch({
        type: INTERVIEW_FETCH_SUCCESS,
        payload: res.data.data.interview,
      });
    } catch (error) {
      dispatch({ type: INTERVIEW_FETCH_FAIL });
    }
  };

/*************************** Get All Interview *******************************/
export const getAllInterview = () => async (dispatch) => {
  dispatch({
    type: INTERVIEW_FETCH_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(API_BASE_URL + "/interview/", config);

    dispatch({
      type: INTERVIEW_FETCH_SUCCESS,
      payload: res.data.data.interview,
    });
  } catch (error) {
    dispatch({ type: INTERVIEW_FETCH_FAIL });
  }
};

/*************************** update Interview *******************************/
export const updateInterview =
  ({
    fecha,
    hora,
    asignacionTo,
    idInterview,
    isAnulado,
    isActivado,
    isAceptado,
  }) =>
  async (dispatch) => {
    dispatch({
      type: INTERVIEW_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      fecha,
      hora,
      asignacionTo,
      isAnulado,
      isActivado,
      isAceptado,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/interview/" + idInterview,
        body,
        config
      );

      dispatch({
        type: INTERVIEW_FETCH_SUCCESS,
        payload: res.data.data.interview,
      });
    } catch (error) {
      dispatch({ type: INTERVIEW_FETCH_FAIL });
    }
  };

/*************************** deleteInterview *******************************/
export const deleteInterview =
  ({ idInterview }) =>
  async (dispatch) => {
    dispatch({
      type: INTERVIEW_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/interview/" + idInterview,
        config
      );

      dispatch({
        type: INTERVIEW_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: INTERVIEW_FETCH_FAIL });
    }
  };

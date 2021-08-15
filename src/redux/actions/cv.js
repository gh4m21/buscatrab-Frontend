import axios from "axios";
import {
  CV_FETCH_REQUEST,
  CV_FETCH_SUCCESS,
  CV_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";

/*************************** AddCv *******************************/
export const addCv = (formData) => async (dispatch) => {
  dispatch({
    type: CV_FETCH_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  /*
    const body = JSON.stringify({
      formData,
    });
*/
  try {
    const res = await axios.post(API_BASE_URL + "/cv/", formData, config);

    dispatch({
      type: CV_FETCH_SUCCESS,
      payload: res.data.data.CV,
    });
  } catch (error) {
    dispatch({ type: CV_FETCH_FAIL });
  }
};

/*************************** Get Cv *******************************/
export const getCv =
  ({ idUsuario }) =>
  async (dispatch) => {
    dispatch({
      type: CV_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(API_BASE_URL + "/cv/" + idUsuario, config);

      dispatch({
        type: CV_FETCH_SUCCESS,
        payload: res.data.data.CV,
      });
    } catch (error) {
      dispatch({ type: CV_FETCH_FAIL });
    }
  };

/*************************** Get All Cv *******************************/
export const getAllCv = () => async (dispatch) => {
  dispatch({
    type: CV_FETCH_REQUEST,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(API_BASE_URL + "/cv/", config);

    dispatch({
      type: CV_FETCH_SUCCESS,
      payload: res.data.data.CV,
    });
  } catch (error) {
    dispatch({ type: CV_FETCH_FAIL });
  }
};

/*************************** deleteCv *******************************/
export const deleteCv =
  ({ idCv }) =>
  async (dispatch) => {
    dispatch({
      type: CV_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(API_BASE_URL + "/cv/" + idCv, config);

      dispatch({
        type: CV_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: CV_FETCH_FAIL });
    }
  };

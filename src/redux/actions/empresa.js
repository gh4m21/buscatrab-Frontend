import axios from "axios";
import {
  EMPRESA_FETCH_REQUEST,
  EMPRESA_FETCH_SUCCESS,
  EMPRESA_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddEmpresa *******************************/
export const addEmpresa =
  ({ _usuario, fechaFundacion, _categoriaEmpresa }) =>
  async (dispatch) => {
    dispatch({
      type: EMPRESA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      _usuario,
      fechaFundacion,
      _categoriaEmpresa,
    });

    try {
      const res = await axios.post(API_BASE_URL + "/empresas/", body, config);

      dispatch({
        type: EMPRESA_FETCH_SUCCESS,
        payload: res.data.data.empresa,
      });
    } catch (error) {
      dispatch({ type: EMPRESA_FETCH_FAIL });
    }
  };

/*************************** Get Empresa *******************************/
export const getEmpresa =
  ({ idEmpresa }) =>
  async (dispatch) => {
    dispatch({
      type: EMPRESA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/empresas/" + idEmpresa,
        config
      );

      dispatch({
        type: EMPRESA_FETCH_SUCCESS,
        payload: res.data.data.empresa,
      });
    } catch (error) {
      dispatch({ type: EMPRESA_FETCH_FAIL });
    }
  };

/*************************** Get All Empresa *******************************/
export const getAllEmpresa = () => async (dispatch) => {
  dispatch({
    type: EMPRESA_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/empresas/", config);

    dispatch({
      type: EMPRESA_FETCH_SUCCESS,
      payload: res.data.data.empresas,
    });
  } catch (error) {
    dispatch({ type: EMPRESA_FETCH_FAIL });
  }
};

/*************************** update Empresa *******************************/
export const updateEmpresa =
  ({ fechaFundacion, _categoriaEmpresa, idEmpresa }) =>
  async (dispatch) => {
    dispatch({
      type: EMPRESA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      fechaFundacion,
      _categoriaEmpresa,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/empresas/" + idEmpresa,
        body,
        config
      );

      dispatch({
        type: EMPRESA_FETCH_SUCCESS,
        payload: res.data.data.empresa,
      });
    } catch (error) {
      dispatch({ type: EMPRESA_FETCH_FAIL });
    }
  };

/*************************** delete Empresa *******************************/
export const deleteEmpresa =
  ({ idEmpresa }) =>
  async (dispatch) => {
    dispatch({
      type: EMPRESA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/empresas/" + idEmpresa,
        config
      );

      dispatch({
        type: EMPRESA_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: EMPRESA_FETCH_FAIL });
    }
  };

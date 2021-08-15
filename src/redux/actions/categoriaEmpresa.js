import axios from "axios";
import {
  CATEGORIAEMPRESA_FETCH_REQUEST,
  CATEGORIAEMPRESA_FETCH_SUCCESS,
  CATEGORIAEMPRESA_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** Get CategoriaEmpresa *******************************/
export const getCategoriaEmpresa =
  ({ idCategoriaEmpresa }) =>
  async (dispatch) => {
    dispatch({
      type: CATEGORIAEMPRESA_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/categoriaEmpresas/" + idCategoriaEmpresa,
        config
      );

      dispatch({
        type: CATEGORIAEMPRESA_FETCH_SUCCESS,
        payload: res.data.data.categoriaEmpresa,
      });
    } catch (error) {
      dispatch({ type: CATEGORIAEMPRESA_FETCH_FAIL });
    }
  };

/*************************** Get All Categoria Empresa *******************************/
export const getAllCategoriaEmpresa = () => async (dispatch) => {
  dispatch({
    type: CATEGORIAEMPRESA_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/categoriaEmpresas/", config);

    dispatch({
      type: CATEGORIAEMPRESA_FETCH_SUCCESS,
      payload: res.data.data.categoriaEmpresa,
    });
  } catch (error) {
    dispatch({ type: CATEGORIAEMPRESA_FETCH_FAIL });
  }
};

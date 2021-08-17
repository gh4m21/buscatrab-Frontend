import axios from "axios";
import {
  PUBLICACIONTRABAJO_FETCH_REQUEST,
  PUBLICACIONTRABAJO_FETCH_SUCCESS,
  PUBLICACIONTRABAJO_FETCH_FAIL,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";

/*************************** AddPublicacionTrabajo *******************************/
export const addPublicacionTrabajo =
  ({
    titulo,
    _empresa,
    posicion,
    _categoriaTrabajo,
    descripcion,
    tipoContrato,
    responsabilidad,
    requerimientos,
    _nivelCarrera,
    experienciaTrabajo,
    lenguaje,
    salario,
    _moneda,
    periodoSalarial,
    cantidadPersonas,
    fechaInicial,
    fechaFinal,
  }) =>
  async (dispatch) => {
    dispatch({
      type: PUBLICACIONTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      titulo,
      _empresa,
      posicion,
      _categoriaTrabajo,
      descripcion,
      tipoContrato,
      responsabilidad,
      requerimientos,
      _nivelCarrera,
      experienciaTrabajo,
      lenguaje,
      salario,
      _moneda,
      periodoSalarial,
      cantidadPersonas,
      fechaInicial,
      fechaFinal,
    });

    try {
      const res = await axios.post(
        API_BASE_URL + "/publicaciontrabajo/",
        body,
        config
      );

      dispatch({
        type: PUBLICACIONTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.publicacionTrabajo,
      });
    } catch (error) {
      dispatch({ type: PUBLICACIONTRABAJO_FETCH_FAIL });
    }
  };

/*************************** Get Publicacion Trabajo *******************************/
export const getPublicacionTrabajo =
  ({ idPublicacionTrabajo }) =>
  async (dispatch) => {
    dispatch({
      type: PUBLICACIONTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/publicaciontrabajo/" + idPublicacionTrabajo,
        config
      );

      dispatch({
        type: PUBLICACIONTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.publicacionTrabajo,
      });
    } catch (error) {
      dispatch({ type: PUBLICACIONTRABAJO_FETCH_FAIL });
    }
  };

/*************************** Get All PublicacionTrabajo *******************************/
export const getAllPublicacionTrabajo = () => async (dispatch) => {
  dispatch({
    type: PUBLICACIONTRABAJO_FETCH_REQUEST,
  });
  setAuthToken(localStorage.getItem("token"));
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.get(API_BASE_URL + "/publicaciontrabajo/", config);

    dispatch({
      type: PUBLICACIONTRABAJO_FETCH_SUCCESS,
      payload: res.data.data.publicacionTrabajo,
    });
  } catch (error) {
    dispatch({ type: PUBLICACIONTRABAJO_FETCH_FAIL });
  }
};

/*************************** Get All PublicacionTrabajo By User Id *******************************/
export const getAllPublicacionTrabajoByUserId =
  (idEmpresa) => async (dispatch) => {
    dispatch({
      type: PUBLICACIONTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        API_BASE_URL + "/publicaciontrabajo/getByUser/" + idEmpresa,
        config
      );

      dispatch({
        type: PUBLICACIONTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.publicacionTrabajo,
      });
    } catch (error) {
      dispatch({ type: PUBLICACIONTRABAJO_FETCH_FAIL });
    }
  };

/*************************** update PublicacionTrabajo *******************************/
export const updatePublicacionTrabajo =
  ({
    titulo,
    _empresa,
    posicion,
    _categoriaTrabajo,
    descripcion,
    tipoContrato,
    responsabilidad,
    requerimientos,
    _nivelCarrera,
    experienciaTrabajo,
    lenguaje,
    salario,
    _moneda,
    periodoSalarial,
    cantidadPersonas,
    fechaInicial,
    fechaFinal,
    idPublicacionTrabajo,
  }) =>
  async (dispatch) => {
    dispatch({
      type: PUBLICACIONTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      titulo,
      _empresa,
      posicion,
      _categoriaTrabajo,
      descripcion,
      tipoContrato,
      responsabilidad,
      requerimientos,
      _nivelCarrera,
      experienciaTrabajo,
      lenguaje,
      salario,
      _moneda,
      periodoSalarial,
      cantidadPersonas,
      fechaInicial,
      fechaFinal,
    });

    try {
      const res = await axios.put(
        API_BASE_URL + "/publicaciontrabajo/" + idPublicacionTrabajo,
        body,
        config
      );

      dispatch({
        type: PUBLICACIONTRABAJO_FETCH_SUCCESS,
        payload: res.data.data.publicacionTrabajo,
      });
    } catch (error) {
      dispatch({ type: PUBLICACIONTRABAJO_FETCH_FAIL });
    }
  };

/*************************** delete PublicacionTrabajo *******************************/
export const deletePublicacionTrabajo =
  ({ idPublicacionTrabajo }) =>
  async (dispatch) => {
    dispatch({
      type: PUBLICACIONTRABAJO_FETCH_REQUEST,
    });
    setAuthToken(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(
        API_BASE_URL + "/publicaciontrabajo/" + idPublicacionTrabajo,
        config
      );

      dispatch({
        type: PUBLICACIONTRABAJO_FETCH_SUCCESS,
        payload: null,
      });
    } catch (error) {
      dispatch({ type: PUBLICACIONTRABAJO_FETCH_FAIL });
    }
  };

import axios from "axios";
import {
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_FAIL,
  REGISTER_FETCH_REQUEST,
  REGISTER_FETCH_SUCCESS,
  REGISTER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
  LOGOUT,
  API_BASE_URL,
} from "./Constants";
import setAuthToken from "../../utils/setAuthToken";
import { authMiddleware } from "../../utils/authMiddleware";

/*************************** LOGOUT *******************************/
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("token");
  window.location.href = "/login";
};

/*************************** LOGIN *******************************/
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: LOGIN_FETCH_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post(
        API_BASE_URL + "/usuarios/authenticate",
        body,
        config
      );

      localStorage.setItem("token", res.data.data.token);

      dispatch({
        type: LOGIN_FETCH_SUCCESS,
        payload: res.data.data.usuario,
      });
    } catch (error) {
      console.log("Error login");
      dispatch({ type: LOGIN_FETCH_FAIL });
      window.location.href = "/login";
    }
  };

/*************************** REGISTER USER *******************************/
export const register =
  ({ email, password, tipoUsuario }) =>
  async (dispatch) => {
    dispatch({ type: REGISTER_FETCH_REQUEST });

    //config para el request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //request para registrar
    const body = JSON.stringify({
      email,
      password,
      tipoUsuario,
    });
    try {
      const res = await axios.post("/usuarios/registrar", body, config);

      //dispatch
      dispatch({
        type: REGISTER_FETCH_SUCCESS,
        payload: res.data.data.usuario,
      });

      dispatch(login({ email, password }));
    } catch (error) {
      dispatch({
        type: REGISTER_FETCH_FAIL,
      });
    }
  };

/*************************** LOAD USER *******************************/
export const loadUser = () => async (dispatch) => {
  dispatch({
    type: USER_FETCH_REQUEST,
  });

  authMiddleware();
  const token = localStorage.getItem("token");
  setAuthToken(token);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get("/usuarios/findUserByToken", config);
    dispatch({
      type: USER_FETCH_SUCCESS,
      payload: res.data.data.usuario,
    });
  } catch (error) {
    dispatch({ type: USER_FETCH_FAIL });
    localStorage.removeItem("token");
    // window.location.href = "/login";
  }
};

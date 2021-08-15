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
} from "../actions/Constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_FETCH_REQUEST:
    case USER_FETCH_REQUEST:
    case REGISTER_FETCH_REQUEST:
      return {
        ...state,
      };
    case LOGIN_FETCH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REGISTER_FETCH_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: payload,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_FETCH_FAIL:
    case USER_FETCH_FAIL:
    case REGISTER_FETCH_FAIL:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: null,
      };
    default:
      return state;
  }
}

import {
  NOMBRE_FETCH_REQUEST,
  NOMBRE_FETCH_SUCCESS,
  NOMBRE_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  nombre: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NOMBRE_FETCH_REQUEST:
      return {
        ...state,
      };
    case NOMBRE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        nombre: payload,
      };
    case NOMBRE_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        nombre: null,
      };
    default:
      return state;
  }
}

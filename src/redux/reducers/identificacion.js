import {
  IDENTIFICACION_FETCH_REQUEST,
  IDENTIFICACION_FETCH_SUCCESS,
  IDENTIFICACION_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  identificacion: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case IDENTIFICACION_FETCH_REQUEST:
      return {
        ...state,
      };
    case IDENTIFICACION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        identificacion: payload,
      };
    case IDENTIFICACION_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        identificacion: null,
      };
    default:
      return state;
  }
}

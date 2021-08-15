import {
  USUARIO_FETCH_REQUEST,
  USUARIO_FETCH_SUCCESS,
  USUARIO_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  usuario: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USUARIO_FETCH_REQUEST:
      return {
        ...state,
      };
    case USUARIO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        usuario: payload,
      };
    case USUARIO_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        usuario: null,
      };
    default:
      return state;
  }
}

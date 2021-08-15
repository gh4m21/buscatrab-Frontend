import {
  FORMACION_FETCH_REQUEST,
  FORMACION_FETCH_SUCCESS,
  FORMACION_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  formacion: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FORMACION_FETCH_REQUEST:
      return {
        ...state,
      };
    case FORMACION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        formacion: payload,
      };
    case FORMACION_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        formacion: null,
      };
    default:
      return state;
  }
}

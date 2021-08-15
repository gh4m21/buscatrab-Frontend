import {
  LENGUAJE_FETCH_REQUEST,
  LENGUAJE_FETCH_SUCCESS,
  LENGUAJE_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  lenguaje: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LENGUAJE_FETCH_REQUEST:
      return {
        ...state,
      };
    case LENGUAJE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        lenguaje: payload,
      };
    case LENGUAJE_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        lenguaje: null,
      };
    default:
      return state;
  }
}

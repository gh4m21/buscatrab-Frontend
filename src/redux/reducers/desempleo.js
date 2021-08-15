import {
  DESEMPLEO_FETCH_REQUEST,
  DESEMPLEO_FETCH_SUCCESS,
  DESEMPLEO_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  desempleo: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DESEMPLEO_FETCH_REQUEST:
      return {
        ...state,
      };
    case DESEMPLEO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        desempleo: payload,
      };
    case DESEMPLEO_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        desempleo: null,
      };
    default:
      return state;
  }
}

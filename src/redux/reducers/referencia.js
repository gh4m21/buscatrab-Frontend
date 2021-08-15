import {
  REFERENCIA_FETCH_REQUEST,
  REFERENCIA_FETCH_SUCCESS,
  REFERENCIA_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  referencia: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REFERENCIA_FETCH_REQUEST:
      return {
        ...state,
      };
    case REFERENCIA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        referencia: payload,
      };
    case REFERENCIA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        referencia: null,
      };
    default:
      return state;
  }
}

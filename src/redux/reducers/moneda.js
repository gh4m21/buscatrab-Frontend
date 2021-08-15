import {
  MONEDA_FETCH_REQUEST,
  MONEDA_FETCH_SUCCESS,
  MONEDA_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  moneda: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MONEDA_FETCH_REQUEST:
      return {
        ...state,
      };
    case MONEDA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        moneda: payload,
      };
    case MONEDA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        moneda: null,
      };
    default:
      return state;
  }
}

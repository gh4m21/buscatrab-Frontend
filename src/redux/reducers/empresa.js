import {
  EMPRESA_FETCH_REQUEST,
  EMPRESA_FETCH_SUCCESS,
  EMPRESA_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  empresa: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case EMPRESA_FETCH_REQUEST:
      return {
        ...state,
      };
    case EMPRESA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        empresa: payload,
      };
    case EMPRESA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        empresa: null,
      };
    default:
      return state;
  }
}

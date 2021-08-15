import {
  CATEGORIAEMPRESA_FETCH_REQUEST,
  CATEGORIAEMPRESA_FETCH_SUCCESS,
  CATEGORIAEMPRESA_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  categoriaEmpresa: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIAEMPRESA_FETCH_REQUEST:
      return {
        ...state,
      };
    case CATEGORIAEMPRESA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        categoriaEmpresa: payload,
      };
    case CATEGORIAEMPRESA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        categoriaEmpresa: null,
      };
    default:
      return state;
  }
}

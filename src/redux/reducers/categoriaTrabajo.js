import {
  CATEGORIATRABAJO_FETCH_REQUEST,
  CATEGORIATRABAJO_FETCH_SUCCESS,
  CATEGORIATRABAJO_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  categoriaTrabajo: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIATRABAJO_FETCH_REQUEST:
      return {
        ...state,
      };
    case CATEGORIATRABAJO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        categoriaTrabajo: payload,
      };
    case CATEGORIATRABAJO_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        categoriaTrabajo: null,
      };
    default:
      return state;
  }
}

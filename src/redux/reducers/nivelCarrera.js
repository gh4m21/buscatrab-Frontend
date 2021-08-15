import {
  NIVELCARRERA_FETCH_REQUEST,
  NIVELCARRERA_FETCH_SUCCESS,
  NIVELCARRERA_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  nivelCarrera: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NIVELCARRERA_FETCH_REQUEST:
      return {
        ...state,
      };
    case NIVELCARRERA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        nivelCarrera: payload,
      };
    case NIVELCARRERA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        nivelCarrera: null,
      };
    default:
      return state;
  }
}

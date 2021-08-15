import {
  EXPERIENCIA_FETCH_REQUEST,
  EXPERIENCIA_FETCH_SUCCESS,
  EXPERIENCIA_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  experiencia: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case EXPERIENCIA_FETCH_REQUEST:
      return {
        ...state,
      };
    case EXPERIENCIA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        experiencia: payload,
      };
    case EXPERIENCIA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        experiencia: null,
      };
    default:
      return state;
  }
}

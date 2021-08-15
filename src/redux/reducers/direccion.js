import {
  DIRECCION_FETCH_REQUEST,
  DIRECCION_FETCH_SUCCESS,
  DIRECCION_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  direccion: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DIRECCION_FETCH_REQUEST:
      return {
        ...state,
      };
    case DIRECCION_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        direccion: payload,
      };
    case DIRECCION_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        direccion: null,
      };
    default:
      return state;
  }
}

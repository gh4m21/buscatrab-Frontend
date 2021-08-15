import {
  PUBLICACIONTRABAJO_FETCH_REQUEST,
  PUBLICACIONTRABAJO_FETCH_SUCCESS,
  PUBLICACIONTRABAJO_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  publicacionTrabajo: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PUBLICACIONTRABAJO_FETCH_REQUEST:
      return {
        ...state,
      };
    case PUBLICACIONTRABAJO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        publicacionTrabajo: payload,
      };
    case PUBLICACIONTRABAJO_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        publicacionTrabajo: null,
      };
    default:
      return state;
  }
}

import {
  SOLICITUDTRABAJO_FETCH_REQUEST,
  SOLICITUDTRABAJO_FETCH_SUCCESS,
  SOLICITUDTRABAJO_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  solicitudTrabajo: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SOLICITUDTRABAJO_FETCH_REQUEST:
      return {
        ...state,
      };
    case SOLICITUDTRABAJO_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        solicitudTrabajo: payload,
      };
    case SOLICITUDTRABAJO_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        solicitudTrabajo: null,
      };
    default:
      return state;
  }
}

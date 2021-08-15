import {
  TELEPHONE_FETCH_REQUEST,
  TELEPHONE_FETCH_SUCCESS,
  TELEPHONE_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  telefono: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TELEPHONE_FETCH_REQUEST:
      return {
        ...state,
      };
    case TELEPHONE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        telefono: payload,
      };
    case TELEPHONE_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        telefono: null,
      };
    default:
      return state;
  }
}

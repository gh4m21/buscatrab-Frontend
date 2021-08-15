import {
  CV_FETCH_REQUEST,
  CV_FETCH_SUCCESS,
  CV_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  cv: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CV_FETCH_REQUEST:
      return {
        ...state,
      };
    case CV_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        cv: payload,
      };
    case CV_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        cv: null,
      };
    default:
      return state;
  }
}

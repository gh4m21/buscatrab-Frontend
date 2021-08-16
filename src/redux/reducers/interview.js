import {
  INTERVIEW_FETCH_REQUEST,
  INTERVIEW_FETCH_SUCCESS,
  INTERVIEW_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  interview: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INTERVIEW_FETCH_REQUEST:
      return {
        ...state,
      };
    case INTERVIEW_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        interview: payload,
      };
    case INTERVIEW_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        interview: null,
      };
    default:
      return state;
  }
}

import {
  STATISTICS_FETCH_REQUEST,
  STATISTICS_FETCH_SUCCESS,
  STATISTICS_FETCH_FAIL,
} from "../actions/Constants";

const initialState = {
  loading: true,
  STATISTICS: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATISTICS_FETCH_REQUEST:
      return {
        ...state,
      };
    case STATISTICS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        STATISTICS: payload,
      };
    case STATISTICS_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        STATISTICS: null,
      };
    default:
      return state;
  }
}

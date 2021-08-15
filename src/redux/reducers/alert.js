import { SET_ALERT, REMOVE_ALERT } from "../actions/Constants";
const initialState = {
  alert: null,
};
export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload,
      };
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

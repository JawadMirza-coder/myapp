import * as ActionTypes from "./ActionType";

export const Feedback = (
  state = {  feedback: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };

    default:
      return state;
  }
};

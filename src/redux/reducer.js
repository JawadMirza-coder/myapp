import { COMMENTS } from "../shared/Comments";
import { PROMOTIONS } from "../shared/Promotion";
import { LEADERS } from "../shared/Leaders";
import { DISHES } from "../shared/Dishes";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

export const Reducer = (state=initialState, action)=>{
    return state;
};

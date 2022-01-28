import { DISHES } from "../shared/Dishes";
import * as ActionTypes from './ActionType';
export const Dishes =(state= DISHES,action)=>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            var dish=action.payload;
            dish.id=state.length;
            console.log(dish.id);
            return state.concat(dish);
        default:
            return state;
    }
}

import * as ActionTypes from './ActionType';
import { DISHES } from "../shared/Dishes";



export const addComment=(dishId,rating,author, comment)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
}) 

export const fetchDihes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    },2000)
}
export const dishesLoading =() =>({
    type:ActionTypes.DISHES_LOADING
})

export const dishesFailed =(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
})
export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
    
})


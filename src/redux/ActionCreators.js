import * as ActionTypes from './ActionType';

export const addComment=(dishId,rating,author, comment)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
})

export const addDishes=(image,name,category, label,price,featured,description)=>({
    type:ActionTypes.ADD_DISHES,
    payload:{
        image:image,
        name:name,
        category:category,
        label:label,
        price:price,
        featured:featured ,
        description:description
    }
})


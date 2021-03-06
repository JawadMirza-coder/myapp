import * as ActionTypes from './ActionType';
import { baseUrl } from '../shared/baseUrl';

export const addComment=(dishId,rating,author, comment)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
}) 

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
//This is end of dishes functionn

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: comments
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    console.log(dishId, rating, author, comment)
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComments(response)))
    .catch(error =>  { console.log('post comments', error.message); 
    });
};
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addleaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const addleaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});
export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});


// export const fetchFeedback = () => (dispatch) => {
//   return fetch(baseUrl + 'feedback')
//   .then(response => response.json())
//   .then(promos => dispatch(addfeedback(promos)));
// }

// export const postFeedback = (firstname, lastname, telnum, email,agree,contactType,message) => (dispatch) => {

//   const newFeedback = {
//     firstname :firstname,
//     lastname: lastname,
//      telnum : telnum,
//      email : email,
//      agree : agree,
//      contactType  :contactType,
//      message :message,
//   };
//   newFeedback.date = new Date().toISOString();
  
//   return fetch(baseUrl + 'feedback', {
//       method: "POST",
//       body: JSON.stringify(newFeedback),
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: "same-origin"
//   })
//   .then(response => {
//       if (response.ok) {
//         return response;
//       } else {
//         var error = new Error('Error ' + response.status + ': ' + response.statusText);
//         error.response = response;
//         throw error;
//       }
//     },
//     error => {
//           throw error;
//     })
//   .then(response => response.json())
//   .then(response => dispatch(addfeedback(response)))
//   .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
// };


// export const addfeedback = (feedback) => ({

//   type: ActionTypes.ADD_FEEDBACK,
//   payload: feedback
// });
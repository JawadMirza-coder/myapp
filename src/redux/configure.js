import { createStore,combineReducers,applyMiddleware} from 'redux';
import { Dishes } from './Dishes';
import { leaders } from './Leaders';
import {Promotions} from './Promotions';
import { Comments } from './Comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './form';
export const ConfigureStore=()=>{
    const store =createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}
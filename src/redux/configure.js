import { createStore,combineReducers} from 'redux';
import { Dishes } from './Dishes';
import { LEADER } from './Leaders';
import { PROMOTION } from './Promotions';
import { Comments } from './Comments';

export const ConfigureStore=()=>{
    const store =createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:PROMOTION,
            leaders:LEADER
        })
    );

    return store;
}
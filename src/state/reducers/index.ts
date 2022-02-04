import { combineReducers } from 'redux';
import shoppingCartReducer from './ShoppingCart';

const rootReducers = combineReducers({
 shoppingCart: shoppingCartReducer
});

export default rootReducers;
export type TState = ReturnType<typeof rootReducers>;

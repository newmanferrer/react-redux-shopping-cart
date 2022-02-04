import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;

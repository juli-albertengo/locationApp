import {  createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import placesReducer from './reducers/places.reducer';

const middlewares = [thunk];

const rootReducer = combineReducers({
    places: placesReducer,
});

export default createStore(rootReducer,  applyMiddleware(...middlewares));

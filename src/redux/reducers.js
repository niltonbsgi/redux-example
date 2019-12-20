import { combineReducers } from 'redux';
import Persons from  '../persons/persons-reducer';

const rootReducer = combineReducers({
    PersonsReducer: Persons
});

export default rootReducer;
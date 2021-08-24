import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    addContactSuccess,
    deleteContactSuccess,
    fetchContactSuccess,
    changeFilter,
    fetchContactError,
    addContactError,
    deleteContactError,
    fetchContactRequest,
    addContactRequest,
    deleteContactRequest
} from './contact-actions';


const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]:(state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),

})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})

const error = createReducer(null, {
    [fetchContactError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [deleteContactError]: (_, { payload }) => payload,
    [fetchContactRequest]: () => null,
    [addContactRequest]: () => null,
    [deleteContactRequest]: () => null,
});

export default combineReducers({ 
    items, 
    filter, 
    error 
});








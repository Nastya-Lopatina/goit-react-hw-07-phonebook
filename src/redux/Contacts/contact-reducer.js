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
    [addContactSuccess]: (state, { payload }) => {
        if (state.find((contact) => contact.name === payload.name)) {
            alert(`${payload.name} уже есть в контактах`);
            return state;
        }
        return [...state, payload]
    },
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




// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import {fetchContact,addContact,deleteContact} from '../Contacts/contact-operations'
// // import {
// //     addContactSuccess,
// //     deleteContactSuccess,
// //     fetchContactSuccess,
// //     changeFilter,
// //     fetchContactError,
// //     addContactError,
// //     deleteContactError,
// //     fetchContactRequest,
// //     addContactRequest,
// //     deleteContactRequest
// // } from './contact-actions';


// const items = createReducer([], {
//     [fetchContact.fulfilled]: (_, { payload }) => payload,
//     [addContact.fulfilled]: (state, { payload }) => {
//         if (state.find((contact) => contact.name === payload.name)) {
//             alert(`${payload.name} уже есть в контактах`);
//             return state;
//         }
//         return [...state, payload]
//     },
//     [deleteContact.fulfilled]: (state, { payload }) =>
//         state.filter(contact => contact.id !== payload),

// })

// const filter = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload
// })

// const error = createReducer(null, {
//     [fetchContact.rejected]: (_, { payload }) => payload,
//     [addContact.rejected]: (_, { payload }) => payload,
//     [deleteContact.rejected]: (_, { payload }) => payload,
//     [fetchContact.pending]: () => null,
//     [addContact.pending]: () => null,
//     [deleteContact.pending]: () => null,
// });

// export default combineReducers({ items, filter, error });





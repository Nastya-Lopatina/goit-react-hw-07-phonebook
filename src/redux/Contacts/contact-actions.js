import { createAction } from '@reduxjs/toolkit'

export const fetchContactRequest = createAction('/contacts/fetchContactRequest')
export const fetchContactSuccess = createAction('/contacts/fetchContactSuccess')
export const fetchContactError = createAction('/contacts/fetchContactError')

export const addContactRequest = createAction('/contacts/addContactRequest')
export const addContactSuccess = createAction('/contacts/addContactSuccess')
export const addContactError = createAction('/contacts/addContactError')

export const deleteContactRequest = createAction('/contacts/deleteContactRequest')
export const deleteContactSuccess = createAction('/contacts/deleteContactSuccess')
export const deleteContactError = createAction('/contacts/deleteContactError')

export const changeFilter = createAction('/contacts/filter')








// import { v4 as uuidv4 } from 'uuid';


// const addContact = createAction('ContactForm/addContact',
//     ({ name, number }) => {
//         return {
//             payload: { name, number, id: uuidv4() }
//         }
//     }
// );

// const deleteContact = createAction('ContactForm/deleteContact');

// const changeFilter = createAction('ContactForm/changeFilter');

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact, deleteContact, changeFilter };

import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from '../Contacts/contact-actions';
import * as API from '../../service/contact-api';

export const fetchContact = () => async dispatch => {
    dispatch(fetchContactRequest())

    try {
        const { data } = await API.fetchContacts();
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error))
    }
}

export const addContact = (name, number) => async dispatch => {
    dispatch(addContactRequest());
    try {
        const items = await API.addContact(name, number);
        dispatch(addContactSuccess(items))

    } catch (error) {
        dispatch(addContactError(error))
    }
}

export const deleteContact = (id) => async dispatch => {
    dispatch(deleteContactRequest())
    try {
        const contactId = await API.deleteContact(id);
        dispatch(deleteContactSuccess(contactId))

    } catch (error) {
        dispatch(deleteContactError(error))
    }
}
   
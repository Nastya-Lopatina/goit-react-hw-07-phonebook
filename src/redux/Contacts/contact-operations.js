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
import {addContact,getContact,deleteContact}from '../../service/contact-api';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';


export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest());
  
    try {
        // console.log(await getContact())
      const { data } = await getContact();
  dispatch(fetchContactSuccess(data))
     
    } catch (error) {
      dispatch(fetchContactError(error));
    }
  
}

export const addContacts = (name, number) => async dispatch => {
    const contact = {
        name,
        number,
      };
    dispatch(addContactRequest());
    try {
        // console.log(await addContact(contact))
        const items = await addContact(contact);
        dispatch(addContactSuccess(items))

    } catch (error) {
        dispatch(addContactError(error))
    }
}

export const deleteContacts = id => dispatch => {
    dispatch(deleteContactRequest());
  
    axios
      .delete(`/contacts/${id}`)
      .then(() => dispatch(deleteContactSuccess(id)))
      .catch(error => dispatch(deleteContactError(error)));
  };

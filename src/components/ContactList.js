import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react';
import style from '../styles/ContactList.module.css';
import { deleteContacts, fetchContacts } from '../redux/Contacts/contact-operations';
import {getVisibleContacts} from '../redux/Contacts/contact-selectors';

const ContactList = () => {
   const contacts = useSelector(getVisibleContacts)
   const dispatch = useDispatch();
   const onDeleteContact = id => dispatch(deleteContacts(id));
   
   useEffect(() => {dispatch(fetchContacts())}, [dispatch]);
 
   return(
       <ul className={style.list}>
        {contacts.map(({ name, number, id }) => (
            <li
                className={style.list_name}
                key={id}>
                {name + ':' + number}

                {<button
                    className={style.button}
                    type='button'
                    name='delete'
                    onClick={() => onDeleteContact(id)}>
                    Удалить
                </button>
                }

            </li>

        ))}

    </ul>
   ) 
}


export default ContactList;

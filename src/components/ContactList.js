import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/ContactList.module.css';
import { deleteContact } from '../redux/Contacts/contact-operations';
import {getVisibleContacts} from '../redux/Contacts/contact-selectors';

const ContactList = () => {
   const contacts = useSelector(getVisibleContacts)
   const dispatch = useDispatch();
   const onDeleteContact = id => dispatch(deleteContact(id));

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

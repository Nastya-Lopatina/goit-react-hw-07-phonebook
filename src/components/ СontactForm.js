import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import style from '../styles/ContactForm..module.css';
import { addContacts } from '../redux/Contacts/contact-operations';
import {getContacts} from '../redux/Contacts/contact-selectors';

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
     const contacts = useSelector(getContacts)

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name': setName(value);
                break;

            case 'number': setNumber(value);
                break;

            default: return;
        }
    };

    const checkRepeatName = name => {
        return contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkRepeatName(name)) {
            alert(`${name} уже есть в контактах`);
           }
        dispatch(addContacts(name, number))
        setName('');
        setNumber('');
    };


    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <label className={style.label}>
                Name
                <input
                    className={style.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label className={style.label}>
                Number
                <input
                    className={style.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button className={style.button} type="submit">
                Добавить контакт
            </button>
        </form>
    );


};

export default ContactForm;
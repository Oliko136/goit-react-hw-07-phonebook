import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts-slice";
import { getContacts } from "../../redux/selectors";
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    
    const doesNameAlreadyExist = ({ name }) => {
        const normalizedName = name.toLowerCase();
        
        const duplicate = contacts.find(contact => {
            const normalizedCurrentName = contact.name.toLowerCase();
            return (normalizedName === normalizedCurrentName);
        })
        return Boolean(duplicate);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const newContact = {
            name: form.elements.name.value,
            number: form.elements.number.value
        }
        
        if (doesNameAlreadyExist(newContact)) {
            alert(`${newContact.name} is already in contacts.`);
            return
        }

        const action = addContact(newContact);
        dispatch(action);
        form.reset();
    }
    
    const contactNameId = useMemo(() => nanoid(), []);
    const contactNumberId = useMemo(() => nanoid(), []);


    return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formField}>
                    <label htmlFor={contactNameId} className={styles.formLabel}>Name</label>
                    <input className={styles.formInput} id={contactNameId} type="text" name="name" placeholder="Name" required />
                </div>
                
                <div className={styles.formField}>
                    <label htmlFor={contactNumberId} className={styles.formLabel}>Number</label>
                    <input className={styles.formInput} id={contactNumberId} type="tel" name="number" placeholder="Number" required />
                </div>
            
                <button type="submit" className={styles.formButton}>Add contact</button>
            </form>
        )
}
    

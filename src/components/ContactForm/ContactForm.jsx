import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const newContact = {
            name: form.elements.name.value,
            phone: form.elements.phone.value
        }

        const action = addContact(newContact);
        dispatch(action);
        form.reset();
    }
    
    const contactNameId = useMemo(() => nanoid(), []);
    const contactPhoneId = useMemo(() => nanoid(), []);


    return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formField}>
                    <label htmlFor={contactNameId} className={styles.formLabel}>Name</label>
                    <input className={styles.formInput} id={contactNameId} type="text" name="name" placeholder="Name" required />
                </div>
                
                <div className={styles.formField}>
                    <label htmlFor={contactPhoneId} className={styles.formLabel}>Number</label>
                    <input className={styles.formInput} id={contactPhoneId} type="tel" name="phone" placeholder="Phone" required />
                </div>
            
                <button type="submit" className={styles.formButton}>Add contact</button>
            </form>
        )
}
    

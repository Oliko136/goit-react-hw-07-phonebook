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
            number: form.elements.number.value
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
    

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts-slice";
import { getFilteredContacts } from "../../redux/selectors";
import styles from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);

    const dispatch = useDispatch();
    console.log(contacts);

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }

    const items = contacts.map(({ id, name, number }) =>
        <li className={styles.contactItem} key={id}>{name}: {number} <button className={styles.deleteButton} onClick={() => handleDelete(id)} type='button'>Delete</button></li>);

        return (
            <ul className={styles.contactList}>
                {items}
            </ul>
        )
}

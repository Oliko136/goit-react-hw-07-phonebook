import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/contacts-operations";
import { selectFilteredContacts, selectIsLoading, selectError } from "../../redux/selectors";
import { Loader } from "components/Loader/Loader";
import styles from './ContactList.module.css';

export const ContactList = () => {
    const items = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    console.log(error);

    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchContacts()) }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    }

    const elements = items.map(({ id, name, phone }) =>
        <li className={styles.contactItem} key={id}>{name}: {phone} <button className={styles.deleteButton} onClick={() => handleDelete(id)} type='button'>Delete</button></li>);

    return (
        <>
            {isLoading && <Loader />}
            {error && <p>Oops sorry, an error occured. Please, try again later</p>}
            <ul className={styles.contactList}>
                {elements}
            </ul>
        </>
    )
}

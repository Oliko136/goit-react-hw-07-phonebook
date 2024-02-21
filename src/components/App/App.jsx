import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import styles from "./App.module.css";

export const App = () => {
  return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />

        <div className={styles.contacts}>
          <h2 className={styles.contactsTitle}>Contacts</h2>
        <Filter />
        <ContactList />
        </div>
      </div>
    )
}
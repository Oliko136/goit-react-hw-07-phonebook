export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts;
    }
    const filteredContacts = contacts.filter(({ name }) => {
        const normalizedName = name.toLowerCase();
        return (
            normalizedName.includes(filter)
        )
    })
    return filteredContacts;
}
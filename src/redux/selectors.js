export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts.items;
    }
    const filteredContacts = contacts.items.filter(({ name }) => {
        const normalizedName = name.toLowerCase();
        return (
            normalizedName.includes(filter)
        )
    })
    return filteredContacts;
}
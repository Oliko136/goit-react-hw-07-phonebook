import axios from 'axios';

axios.defaults.baseURL = 'https://65d625c4f6967ba8e3bd9689.mockapi.io/api';

export async function fetchAll() {
    const { data } = await axios.get('/contacts');
    return data;
}

export async function addContact(body) {
    const { data } = await axios.post('/contacts', body);
    return data;
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}
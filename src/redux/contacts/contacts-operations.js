import { createAsyncThunk } from "@reduxjs/toolkit"
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, {rejectWithValue}) => {
        try {
            const data = await contactsAPI.fetchAll();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (body, {rejectWithValue}) => {
        try {
            const data = await contactsAPI.addContact(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
    {
        condition: ({name}, { getState }) => {
            const { contacts } = getState();
            const normalizedName = name.toLowerCase();
            
            const duplicate = contacts.items.find(contact => {
                const normalizedCurrentName = contact.name.toLowerCase();
                return (normalizedName === normalizedCurrentName);
            })

            if (duplicate) {
                alert(`${name} is already in list`);
                return false;
            };
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {rejectWithValue}) => {
        try {
            await contactsAPI.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
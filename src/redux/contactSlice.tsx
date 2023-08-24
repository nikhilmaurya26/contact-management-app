// src/redux/contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { contactList } from '../data';

const contactSlice = createSlice({
  name: 'contacts',
  initialState:{contactList},
  reducers: {
  },
});

// export const { addContact, updateContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;

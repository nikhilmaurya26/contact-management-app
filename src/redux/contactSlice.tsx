// src/redux/contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { contactList } from '../data';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contactList },
  reducers: {
    addContact: (state, action: PayloadAction<{ id: number; name: string; email: string }>) => {
      const { id, name, email } = action.payload;
      console.log("Action Payload:", { id, name, email }); // Log payload content
      state.contactList.push({ id, name, email });
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;

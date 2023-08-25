// src/redux/contactSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactList } from "../data";

const contactSlice = createSlice({
  name: "contacts",
  initialState: { contactList },
  reducers: {
    addContact: (
      state,
      action: PayloadAction<{ id: number; name: string; email: string }>
    ) => {
      const { id, name, email } = action.payload;
      console.log("Action Payload:", { id, name, email }); // Log payload content
      state.contactList.push({ id, name, email });
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;

      // Convert the draft state to a regular array using slice or spread
      const stateArray = state.contactList.slice(); // or [...state.contactList]

      const userToUpdate = stateArray.find((user) => user.id === id);
      if (userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.email = email;
      }
    },
    deteleUser: (state, action) => {
      const { id } = action.payload;
      const stateArray = state.contactList.slice();

      // Find the index of the user with the specified id
      const userIndex = stateArray.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        // Create a new state array without the user to be deleted
        stateArray.splice(userIndex, 1);

        // Return the updated state with the modified contactList
        state.contactList = stateArray;
      }
    },
  },
});

export const { addContact, updateUser,deteleUser } = contactSlice.actions;
export default contactSlice.reducer;

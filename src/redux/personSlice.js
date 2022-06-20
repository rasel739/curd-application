import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: [],
};

export const personSlice = createSlice({
  name: "person",
  initialState,

  reducers: {
    showPerson: (state) => state,

    postPerson: (state, action) => {
      state.person.push(action.payload);
    },

    updatePerson: (state, action) => {
      const { id, name, phone } = action.payload;

      const updatePersonData = (state.person = state.person.filter(
        (person) => person.id === id
      ));

      if (updatePersonData) {
        updatePersonData[0].name = name;
        updatePersonData[0].phone = phone;
      }
    },

    deletePerson: (state, action) => {
      const id = action.payload;

      state.person = state.person.filter((person) => person.id !== id);
    },
  },
});

export const { showPerson, postPerson, deletePerson, updatePerson } =
  personSlice.actions;

export default personSlice.reducer;

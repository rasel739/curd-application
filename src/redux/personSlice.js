import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: [],
};

export const personSlice = createSlice({
  name: "person",
  initialState,

  reducers: {
    showPerson: (state) => {
      return {
        ...state,
      };
    },

    postPerson: (state, action) => {
      state.person.push(action.payload);
    },

    updatePerson: (state, action) => {
      const { id, name, phone } = action.payload;

      state.person.map((person) => {
        if (person.id === id) {
          person.name = name;
          person.phone = phone;
        }

        return person;
      });
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

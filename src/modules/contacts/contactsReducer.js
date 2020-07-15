import { createReducer, combineReducers } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};

const addContact = (state, { payload }) => [payload.contact, ...state];
const deleteContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer(initialState.contacts.items, {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer(initialState.contacts.filter, {
  [contactsActions.filterContacts]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

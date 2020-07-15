import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("contacts/delete");

const filterContacts = createAction("contacts/filter");

export default {
  addContact,
  deleteContact,
  filterContacts,
};

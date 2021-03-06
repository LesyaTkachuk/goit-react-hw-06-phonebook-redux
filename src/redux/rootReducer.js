import { combineReducers } from "redux";
import contactsReducer from "./contacts/contactsReducer";
import { themeReducer } from "./theme/themeReducer";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  themeToggler: themeReducer,
});

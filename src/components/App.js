import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import contactsActions from "../modules/contacts/contactsActions";

import Layout from "./common/Layout/Layout";
import Section from "./common/Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ComtactList/ContactList";
import ThemeToggler from "./ThemeToggler/ThemeToggler";

import localStorageMethods from "../utils/localStorageMethods";

import "react-toastify/dist/ReactToastify.css";

const App = ({ contacts, onAddContact }) => {
  const showNotification = (message) => {
    toast(message);
  };

  const handleAddContact = ({ name, number }) => {
    if (name === "") {
      showNotification("🦄 Please enter contact name");

      return;
    }
    if (number === "") {
      showNotification("🦄 Please enter contact phone number");
      return;
    }

    const hasContact = contacts.some((contact) => contact.name === name);

    hasContact
      ? showNotification(`${name} is already in contacts`)
      : onAddContact(name, number);
  };

  return (
    <Layout>
      <ThemeToggler />
      <Section title="Phonebook">
        <ContactForm onSubmit={handleAddContact} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          {contacts.length > 1 && <Filter />}
          <ContactList />
        </Section>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />
    </Layout>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onAddContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onAddContact: contactsActions.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

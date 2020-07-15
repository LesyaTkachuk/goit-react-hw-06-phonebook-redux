import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../modules/contacts/contactsActions";
import styles from "./ContactList.module.scss";

function ContactList({ contacts, onClickDelete, isChecked }) {
  return (
    <ul
      className={`${styles.list} ${
        isChecked ? styles.list__dark : styles.list__light
      }`}
    >
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span className={styles.name}>{name}: </span>
          <span>{number}</span>
          <button type="button" onClick={() => onClickDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,

  onClickDelete: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalisedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter)
  );

  return {
    contacts: filteredContacts,
    isChecked: state.themeToggler.isChecked,
  };
};

const mapDispatchToProps = {
  onClickDelete: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

import React from "react";
import styles from "./Filter.module.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../modules/contacts/contactsActions";

function Filter({ filter, onChangeFilter }) {
  return (
    <label className={styles.label}>
      Find contact by name
      <input
        type="text"
        value={filter}
        onChange={(e) => onChangeFilter(e.target.value)}
        className={styles.input}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

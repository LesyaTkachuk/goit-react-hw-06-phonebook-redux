import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Layout.module.scss";

function Layout({ children, isChecked }) {
  return (
    <div
      className={`${styles.container} ${
        isChecked ? styles.dark : styles.light
      }`}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isChecked: state.themeToggler.isChecked,
});

export default connect(mapStateToProps)(Layout);

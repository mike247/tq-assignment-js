import React from 'react';
import PropTypes from 'prop-types';
import './actionButton.css';

const ActionButton = (props) => {
  const { label, role, onSubmit } = props;

  return (
    <button className="actionButton" type="button" role={role} onClick={onSubmit}>{label}</button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string,
  role: PropTypes.string,
  onSubmit: PropTypes.func,
};

ActionButton.defaultProps = {
  label: 'Search',
  role: 'button',
  onSubmit: () => false,
};

export default ActionButton;

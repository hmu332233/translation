import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.scss';

import classNames from 'classnames';

const DropdownItem = (props) => (
  <a className="dropdown-item" onClick={props.onClick}>
    {props.text}
  </a>
);

function Dropdown(props) {

  const handleItemClick = (item) => {
    props.onItemClick(item);
    props.toggle();
  };

  return (
    <div className={classNames('dropdown', styles.Dropdown)} >
      <button className="btn btn-primary dropdown-toggle" type="button" onClick={props.toggle}>
        {props.buttonText}
      </button>
      <div className={classNames('dropdown-menu', props.isOpen && 'show')}>
        {props.items.map((item, index) => (
          <DropdownItem
            key={item.id || index}
            text={item.text}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  buttonText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};
Dropdown.defaultProps = {
  isOpen: false,
  toggle: v => v,
  items: [],
};

export default Dropdown;

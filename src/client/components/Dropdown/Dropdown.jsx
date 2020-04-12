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
    <div className={classNames('dropdown', styles.Dropdown, props.className)} >
      <div className={classNames(styles.Dropdown__button, props.buttonClassName)} data-toggle="dropdown" onClick={props.toggle}>
        {props.buttonText}
      </div>
      <div className={classNames('dropdown-menu', props.isOpen && 'show')}>
        {props.items.map((item, index) => (
          <DropdownItem
            key={item.id || item.value || index}
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
  buttonClassName: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  buttonText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onItemClick: PropTypes.func,
};
Dropdown.defaultProps = {
  isOpen: false,
  toggle: v => v,
  items: [],
  onItemClick: v => v,
};

export default Dropdown;

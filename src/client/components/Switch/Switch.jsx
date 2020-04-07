import React from 'react';
import PropTypes from 'prop-types';
import styles from './Switch.scss';

import classNames from 'classnames';

function Switch(props) {
  return (
    <div className={classNames('custom-control', 'custom-switch', styles.Switch)} onClick={props.onClick}>
      <input type="checkbox" class="custom-control-input" checked={props.checked} />
      <label class="custom-control-label">{props.label}</label>
    </div>
  );
}

Switch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};
Switch.defaultProps = {
  checked: false,
  onClick: v => v,
};

export default Switch;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextareaGroup.scss';

import classNames from 'classnames';

function TextareaGroup(props) {
  return (
    <div className={classNames('form-group', styles.TextareaGroup)}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea className="form-control" id={props.id} onChange={props.onChange} value={props.value} />
    </div>
  );
}

TextareaGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};
TextareaGroup.defaultProps = {
  onChange: v => v,
};

export default TextareaGroup;
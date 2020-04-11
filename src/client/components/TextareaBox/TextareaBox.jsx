import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextareaBox.scss';

function TextareaBox(props) {
  return (
    <div className={styles.TextareaBox}>
      <textarea className={styles.TextareaBox__textarea} value={props.value} onChange={props.onChange} />
    </div>
  );
}

TextareaBox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
TextareaBox.defaultProps = {
  onChange: v => v,
};

export default TextareaBox;
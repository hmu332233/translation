import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextareaBox.scss';

function TextareaBox(props) {
  return (
    <div className={styles.TextareaBox}>
      <textarea className={styles.TextareaBox__textarea} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} />
    </div>
  );
}

TextareaBox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};
TextareaBox.defaultProps = {
  placeholder: '텍스트 입력',
  onChange: v => v,
  onKeyDown: v => v,
};

export default TextareaBox;
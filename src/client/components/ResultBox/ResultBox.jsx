import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultBox.scss';

import classNames from 'classnames';

function ResultBox(props) {
  return (
    <div className={classNames(styles.ResultBox, styles[props.type])} onClick={props.onClick}>
      <div className={styles.ResultBox__body}>{props.text}</div>
      <div className={styles.ResultBox__footer}></div>
    </div>
  );
}

ResultBox.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['google', 'kakao', 'naver']),
  onClick: PropTypes.func,
};
ResultBox.defaultProps = {
  text: '',
  type: 'google',
  onClick: v => v,
};

export default ResultBox;

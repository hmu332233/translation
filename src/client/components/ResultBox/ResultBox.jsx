import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultBox.scss';

import classNames from 'classnames';

function ResultBox(props) {
  return (
    <div className={classNames(styles.ResultBox, styles[props.type])}>
      <div className={styles.ResultBox__body}>{props.text}</div>
      <div className={styles.ResultBox__footer}></div>
    </div>
  );
}

ResultBox.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['google', 'kakao', 'naver']),
};
ResultBox.defaultProps = {
  text: '',
  type: 'google',
};

export default ResultBox;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageDropdown.scss';

import Dropdown from 'components/Dropdown';

const ITEMS = [
  {
    text: '한국어',
    value: 'ko',
  },
  {
    text: '영어',
    value: 'en',
  },
  {
    text: '일본어',
    value: 'jp',
  },
];

function LanguageDropdown(props) {
  return (
    <Dropdown className={styles.LanguageDropdown}
      {...props}
      items={ITEMS}
    />
  );
}

LanguageDropdown.propTypes = {
  ...Dropdown.propTypes
};
LanguageDropdown.defaultProps = {
  ...Dropdown.defaultProps,
  buttonText: '언어 선택',
};

export default LanguageDropdown;
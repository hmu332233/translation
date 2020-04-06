import React from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageDropdown.scss';

import { LANGUAGE_ITEMS } from 'constants';

import Dropdown from 'components/Dropdown';

function LanguageDropdown(props) {
  return (
    <div className={styles.LanguageDropdown}>
      <Dropdown
        className={styles.LanguageDropdown__dropdown}
        buttonClassName={styles.LanguageDropdown__dropdown__button}
        items={LANGUAGE_ITEMS}
        isOpen={props.isSourceDropdownOpen}
        toggle={props.toggleSourceDropdown}
        buttonText={props.sourceDropdownButtonText}
        onItemClick={props.onSourceItemClick}
      />
      <Dropdown
        className={styles.LanguageDropdown__dropdown}
        buttonClassName={styles.LanguageDropdown__dropdown__button}
        items={LANGUAGE_ITEMS}
        isOpen={props.isTargetDropdownOpen}
        toggle={props.toggleTargetDropdown}
        buttonText={props.targetDropdownButtonText}
        onItemClick={props.onTargetItemClick}
      />
    </div>
  );
}

LanguageDropdown.propTypes = {
  sourceDropdownButtonText: PropTypes.object,
  targetDropdownButtonText: PropTypes.object,
  isSourceDropdownOpen: PropTypes.bool,
  isTargetDropdownOpen: PropTypes.bool,
  toggleSourceDropdown: PropTypes.func,
  toggleTargetDropdown: PropTypes.func,
  onSourceItemClick: PropTypes.func,
  onTargetItemClick: PropTypes.func,
};
LanguageDropdown.defaultProps = {};


export default LanguageDropdown;

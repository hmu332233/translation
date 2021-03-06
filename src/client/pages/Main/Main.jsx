import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import classNames from 'classnames';

import HotkeyModal from 'containers/HotkeyModalContainer';
import LanguageDropdown from 'containers/LanguageDropdownContainer';
import TextareaGroupList from 'containers/TextareaGroupList';
import HotKeys from 'containers/HotKeys';

import LiveSwitch from 'containers/LiveSwitch';

function Main(props) {
  return (
    <div className={styles.Main}>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Translation
          </a>
          <LiveSwitch />
        </nav>
      </header>
      <div className={styles.Main__body}>
        <LanguageDropdown />
        <TextareaGroupList className="w-100" />
      </div>
      <HotKeys />
      <HotkeyModal />
    </div>
  );
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;

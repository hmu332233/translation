import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import classNames from 'classnames';

import LanguageDropdown from 'containers/LanguageDropdownContainer';
import TextareaGroupList from 'containers/TextareaGroupList';

function Main(props) {
  return (
    <div className={styles.Main}>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Translation
          </a>
        </nav>
      </header>
      <div className={classNames('container', styles.Main__body)}>
        <div className="row">
          <div className="col-12">
            <LanguageDropdown />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <TextareaGroupList className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;

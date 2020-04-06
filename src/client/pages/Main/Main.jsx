import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import classNames from 'classnames';

import LanguageDropdown from 'containers/LanguageDropdownContainer';
import TextareaGroupList from 'containers/TextareaGroupList';

function Main(props) {
  return (
    <div className={classNames('container', styles.Main)}>
      <div className="row">
        <div className="col-12">
          <LanguageDropdown />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <TextareaGroupList className="w-100" />
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;

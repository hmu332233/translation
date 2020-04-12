import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import hotkeys from 'hotkeys-js';
 
function HotKeys(props) {

  useEffect(() => {
    hotkeys('ctrl+alt+t', (e, handler) => {
      props.toggleLive();
      e.preventDefault();
    });
  }, []);

  return null;
}

HotKeys.propTypes = {
};
HotKeys.defaultProps = {
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLive: state.translation.isLive,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleLive: () => dispatch(actions.toggleLive()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotKeys);

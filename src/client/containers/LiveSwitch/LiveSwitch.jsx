import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import Switch from 'components/Switch';

function LiveSwitch(props) {
  return (
    <Switch
      label="Live"
      checked={props.isLive}
      onClick={props.toggleLive}
    />
  );
}

LiveSwitch.propTypes = {
};
LiveSwitch.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LiveSwitch);

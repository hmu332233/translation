import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import { HOTKEYS } from 'constants';

import HotkeyModal from 'components/HotkeyModal';

function HotkeyModalContainer(props) {
  const items = useMemo(() => Object.values(HOTKEYS), []);
  return (
    <HotkeyModal
      isOpen={props.isOpen}
      toggle={props.toggle}
      items={items}
    />
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.translation.isHotkeyModalOpen,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: () => dispatch(actions.toggleHotkeyModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotkeyModalContainer);

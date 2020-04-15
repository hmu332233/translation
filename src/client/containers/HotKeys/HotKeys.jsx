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

    hotkeys('ctrl+alt+`', (e, handler) => {
      props.swapLanguage();
      e.preventDefault();
    });

    hotkeys('ctrl+alt+1', (e, handler) => {
      console.log('기능 미구현');
      e.preventDefault();
    });

    hotkeys('ctrl+alt+2', (e, handler) => {
      props.copyKakaoToClipboard();
      e.preventDefault();
    });

    hotkeys('ctrl+alt+3', (e, handler) => {
      props.copyNaverToClipboard();
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
    swapLanguage: () => dispatch(actions.swapLanguage()),
    toggleLive: () => dispatch(actions.toggleLive()),
    copyKakaoToClipboard: () => dispatch(actions.copyToClipboard({ type: 'kakao' })),
    copyNaverToClipboard: () => dispatch(actions.copyToClipboard({ type: 'naver' })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotKeys);

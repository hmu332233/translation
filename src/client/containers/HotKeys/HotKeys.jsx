import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import hotkeys from 'hotkeys-js';

import { HOTKEYS_KEY, HOTKEYS } from 'constants';

function HotKeys(props) {

  useEffect(() => {
    hotkeys.filter = () => true;    

    hotkeys(HOTKEYS[HOTKEYS_KEY.INPUT.FOCUS].command, (e, handler) => {
      document.getElementById('TranslationInput').focus();
    });

    hotkeys(HOTKEYS[HOTKEYS_KEY.HELP.TOGGLE].command, (e, handler) => {
      props.toggleHotkeyModal();
      e.preventDefault();
    });

    hotkeys(HOTKEYS[HOTKEYS_KEY.LIVE.TOGGLE].command, (e, handler) => {
      props.toggleLive();
      e.preventDefault();
    });

    hotkeys(HOTKEYS[HOTKEYS_KEY.LANGUAGE.SWAP].command, (e, handler) => {
      props.swapLanguage();
      e.preventDefault();
    });

    hotkeys(HOTKEYS[HOTKEYS_KEY.COPY.GOOGLE].command, (e, handler) => {
      props.copyGoogleToClipboard();
      e.preventDefault();
    });

    hotkeys(HOTKEYS[HOTKEYS_KEY.COPY.KAKAO].command, (e, handler) => {
      props.copyKakaoToClipboard();
      e.preventDefault();
    });

    hotkeys(HOTKEYS[HOTKEYS_KEY.COPY.NAVER].command, (e, handler) => {
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
    toggleHotkeyModal: () => dispatch(actions.toggleHotkeyModal()),
    copyKakaoToClipboard: () => dispatch(actions.copyToClipboard({ type: 'kakao' })),
    copyNaverToClipboard: () => dispatch(actions.copyToClipboard({ type: 'naver' })),
    copyGoogleToClipboard: () => dispatch(actions.copyToClipboard({ type: 'google' })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotKeys);

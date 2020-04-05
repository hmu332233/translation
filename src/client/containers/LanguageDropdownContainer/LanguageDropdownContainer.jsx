import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import useToggle from 'hooks/useToggle';

import LanguageDropdown from 'components/LanguageDropdown';

function LanguageDropdownContainer(props) {
  const [isSourceDropdownOpen, toggleSourceDropdown] = useToggle();
  const [isTargetDropdownOpen, toggleTargetDropdown] = useToggle();

  const handleSourceItemClick = (item) => {
    let nextSourceLanguageItem = item;
    let nextTargetLanguageItem;
    if (props.targetLanguageItem.value === item.value) {
      nextTargetLanguageItem = props.sourceLanguageItem;
    }
    props.changeLanguageItem({
      sourceLanguageItem: nextSourceLanguageItem,
      targetLanguageItem: nextTargetLanguageItem,
    });
  };

  const handleTargetItemClick = (item) => {
    let nextSourceLanguageItem;
    let nextTargetLanguageItem = item;
    if (props.sourceLanguageItem.value === item.value) {
      nextSourceLanguageItem = props.targetLanguageItem;
    }
    props.changeLanguageItem({
      sourceLanguageItem: nextSourceLanguageItem,
      targetLanguageItem: nextTargetLanguageItem,
    });
  };

  return (
    <LanguageDropdown
      sourceDropdownButtonText={props.sourceLanguageItem.text}
      targetDropdownButtonText={props.targetLanguageItem.text}
      isSourceDropdownOpen={isSourceDropdownOpen}
      isTargetDropdownOpen={isTargetDropdownOpen}
      toggleSourceDropdown={toggleSourceDropdown}
      toggleTargetDropdown={toggleTargetDropdown}
      onSourceItemClick={handleSourceItemClick}
      onTargetItemClick={handleTargetItemClick}
    />
  );
}

LanguageDropdownContainer.propTypes = {};
LanguageDropdownContainer.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
    sourceLanguageItem: state.translation.sourceLanguageItem,
    targetLanguageItem: state.translation.targetLanguageItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeLanguageItem: ({ sourceLanguageItem, targetLanguageItem }) => dispatch(actions.changeLanguageItem({ sourceLanguageItem, targetLanguageItem })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdownContainer);

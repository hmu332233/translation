import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import _debounce from 'lodash/debounce';

import TextareaBox from 'components/TextareaBox';
import ResultBox from 'components/ResultBox';

function TextareaGroupList(props) {

  const handleValueChange = e => {
    const value = e.target.value;
    props.onChange(value);
    props.isLive && value && props.fetchTranslation(e.target.value);
  }

  return (
    <div className={props.className}>
      <TextareaBox value={props.value} onChange={handleValueChange} />
      <ResultBox text={props.value} type="google" />
      <ResultBox text={props.value} type="kakao" />
      <ResultBox text={props.value} type="naver" />
    </div>
  );
}

TextareaGroupList.propTypes = {
  className: PropTypes.string,
};
TextareaGroupList.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
    isLive: state.translation.isLive,
    value: state.translation.value,
    kakaoValue: state.translation.kakao,
    naverValue: state.translation.naver,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: value => dispatch(actions.changeValue(value)),
    fetchTranslation : _debounce(value => dispatch(actions.fetchTranslation(value)), 1000),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextareaGroupList);

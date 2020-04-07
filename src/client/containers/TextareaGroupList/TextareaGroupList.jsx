import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import _debounce from 'lodash/debounce';

import TextareaGroup from 'components/TextareaGroup';

function TextareaGroupList(props) {

  const handleValueChange = e => {
    const value = e.target.value;
    props.onChange(value);
    value && props.fetchTranslation(e.target.value);
  }

  return (
    <div className={props.className}>
      <TextareaGroup label="Text" value={props.value} onChange={handleValueChange} />
      <TextareaGroup label="Google" value={props.value} />
      <TextareaGroup label="Naver" value={props.naverValue} />
      <TextareaGroup label="Kakao" value={props.kakaoValue} />
    </div>
  );
}

TextareaGroupList.propTypes = {
  className: PropTypes.string,
};
TextareaGroupList.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
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

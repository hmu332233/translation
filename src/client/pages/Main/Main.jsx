import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import classNames from 'classnames';

import TextareaGroup from 'components/TextareaGroup';

function Main(props) {

  const handleValueChange = e => {
    props.onChange(e.target.value);
    props.fetchTranslation(e.target.value);
  }

  return (
    <div className={classNames('container', styles.Main)}>
      <div className="row">
        <form className="w-100">
          <TextareaGroup
            label="Text"
            value={props.value}
            onChange={handleValueChange}
          />
          <TextareaGroup
            label="Google"
            value={props.value}
          />
          <TextareaGroup
            label="Naver"
            value={props.value}
          />
          <TextareaGroup
            label="Kakao"
            value={props.value}
          />
        </form>
      </div>
    </div>
  );
}

Main.propTypes = {};
Main.defaultProps = {};

// store의 state를 component의 props로 맵핑한다.
// state: from redux-store
// ownProps: from parent component
const mapStateToProps = (state, ownProps) => {
  return {
    value: state.translation.value,
  };
};

// store의 dispatch를 props로 맵핑한다.
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: value => dispatch(actions.changeValue(value)),
    fetchTranslation : value => dispatch(actions.fetchTranslation(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

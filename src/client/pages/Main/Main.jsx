import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.scss';

import { connect } from 'react-redux';
import { actions } from 'store/modules/translation';

import classNames from 'classnames';

function Main(props) {

  const handleValueChange = e => {
    props.onChange(e.target.value);
  }

  return (
    <div className={classNames('container', styles.Main)}>
      <div className="row">
        <label for="validationServerUsername">Text</label>
        <textarea class="form-control" placeholder="Required example textarea" onChange={handleValueChange} />
        <label for="validationServerUsername">Google</label>
        <textarea class="form-control" placeholder="Required example textarea" value={props.value} />
        <label for="validationServerUsername">Naver</label>
        <textarea class="form-control" placeholder="Required example textarea" value={props.value} />
        <label for="validationServerUsername">Kakao</label>
        <textarea class="form-control" placeholder="Required example textarea" value={props.value} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

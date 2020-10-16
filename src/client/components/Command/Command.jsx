import React from 'react';
import PropTypes from 'prop-types';
import styles from './Command.scss';

function Command(props) {
  return (
    <div>
      {props.value
        .split('+')
        .map((char) => <kbd>{char}</kbd>)
        .reduce((prev, curr) => [prev, ' ', curr])}
    </div>
  );
}

Command.propTypes = {
  value: PropTypes.string,
};
Command.defaultProps = {
  value: '',
};

export default Command;

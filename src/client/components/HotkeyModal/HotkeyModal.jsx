import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotkeyModal.scss';

import classnames from 'classnames';

import Command from 'components/Command';

const HotKeyItem = (props) => (
  <div className={classnames(styles.HotKeyItem)}>
    <Command value={props.command} />
    <span className={styles.HotKeyItem__description}>{props.description}</span>
  </div>
);

function HotkeyModal(props) {
  return props.isOpen && (
    <>
      <div className={classnames(styles.HotkeyModal, 'modal show d-block')} tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                Hotkeys
              </h5>
              <button type="button" className="close" onClick={props.toggle}>
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {props.items.map((item) => (
                <HotKeyItem key={item.id} command={item.command} description={item.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {<div className={classnames('modal-backdrop show')} />}
    </>
  );
}

HotkeyModal.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      command: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
HotkeyModal.defaultProps = {
  isOpen: false,
  toggle: v => v,
  items: [],
};

export default HotkeyModal;

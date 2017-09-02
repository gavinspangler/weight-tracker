import React, { Component } from 'react';
import Modal from 'react-modal';
import { PropTypes } from 'prop-types';

export default class LogWeightModal extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#1A0315';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal }
          onRequestClose={ this.closeModal }
          contentLabel='Log Weight Modal'
        >
          <h2 ref={ subtitle => this.subtitle = subtitle }>Log Weight</h2>
          <form>
            <input />
          </form>
          <button>Save</button>
          <button onClick={ this.closeModal }>Close</button>
        </Modal>
        <button type='button' className='button' onClick={ this.openModal }>Log Weight</button>
      </div>
    );
  }
}

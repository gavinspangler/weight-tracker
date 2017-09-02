import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchWeightData, logWeight } from 'actions/app';
import Modal from 'react-modal';

import LineChart from 'components/Charts/LineChart';

@connect(state => ({
  weightData: state.app.weightData,
  weightDataError: state.app.weightDataError,
  weightDataLoading: state.app.weightDataLoading,
}))
export default class Home extends Component {
  static propTypes = {
    weightData: PropTypes.object,
    weightDataError: PropTypes.object,
    weightDataLoading: PropTypes.bool,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.logWeight = this.logWeight.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchWeightData());
  }

  logWeight() {
    const { dispatch, weightData } = this.props;

    dispatch(logWeight(weightData));
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    logWeight();
  }

  render() {
    const {
      weightData,
      weightDataError,
      weightDataLoading,
    } = this.props;

    return (
      <div className='Home'>
        <div>
          <div className='title-bar'>
            <div>
              <h1>Weight Tracker</h1>
            </div>
            <div>
              <Modal
                isOpen={ this.state.modalIsOpen }
                onAfterOpen={ this.afterOpenModal }
                onRequestClose={ this.closeModal }
                contentLabel='Example Modal'
              >
                <h2 ref={ subtitle => this.subtitle = subtitle }>Hello</h2>
                <button onClick={ this.closeModal }>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal>
              <button type='button' className='button' onClick={ this.openModal }>Log Weight</button>
            </div>
          </div>
          { weightData &&
            <div className='chart-wrapper'>
              <LineChart xValues={ weightData.xValues } yValues={ weightData.yValues } />
            </div>
          }
          { weightDataLoading && <p>Loading...</p> }
          { weightDataError && <p>Error: { weightDataError }</p> }
        </div>
      </div>
    );
  }
}

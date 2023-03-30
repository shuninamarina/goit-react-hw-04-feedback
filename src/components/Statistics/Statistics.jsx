import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;

    return (
      <div>
        <ul>
          <li>
            <div>Good:</div>
            <div>{good}</div>
          </li>
          <li>
            <div>Neutral:</div>
            <div>{neutral}</div>
          </li>
          <li>
            <div>Bad:</div>
            <div>{bad}</div>
          </li>
          <li>
            <div>Total:</div>
            <div>{total}</div>
          </li>
          <li>
            <div>divositive feedback:</div>
            <div>{divercentage}%</div>
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
export default Statistics;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        <div>
          {options.map(option => (
            <button key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;

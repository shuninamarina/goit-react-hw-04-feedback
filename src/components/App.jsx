import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({good: 0, neutral: 0, bad: 0,})

  const onLeaveFeedback = option => {
    setState(prevState => ({
      ...prevState, 
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

    const { good, neutral, bad } = state;
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              percentage={positiveFeedbackPercentage}
            />
          </Section>
        )}
      </div>
    );
  }

App.propTypes = {
  children: PropTypes.node,
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPercentage,
  StatisticsCount,
} from './Statistics.styled';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;

    return (
      <StatisticsContainer>
        <StatisticsList>
          <StatisticsItem>
            <StatisticsLabel>Good:</StatisticsLabel>
            <StatisticsCount>{good}</StatisticsCount>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsLabel>Neutral:</StatisticsLabel>
            <StatisticsCount>{neutral}</StatisticsCount>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsLabel>Bad:</StatisticsLabel>
            <StatisticsCount>{bad}</StatisticsCount>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsLabel>Total:</StatisticsLabel>
            <StatisticsCount>{total}</StatisticsCount>
          </StatisticsItem>
          <StatisticsItem>
            <StatisticsLabel>Positive feedback:</StatisticsLabel>
            <StatisticsPercentage>{percentage}%</StatisticsPercentage>
          </StatisticsItem>
        </StatisticsList>
      </StatisticsContainer>
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
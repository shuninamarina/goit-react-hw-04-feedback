import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NotificationContainer,
  NotificationMessage,
} from './Notification.styled';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <NotificationContainer>
        <NotificationMessage>{message}</NotificationMessage>
      </NotificationContainer>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
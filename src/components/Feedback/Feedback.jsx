import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "../Statistics/Statistics";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    countPositiveFeedback = () => {
        this.setState(curState => {
            return {
                good: curState.good + 1
            }
        })
    };

    countNeutralFeedback = () => {
        this.setState(curState => {
            return {
                neutral: curState.neutral + 1
            }
        })
    };

    countBadFeedback = () => {
        this.setState(curState => {
            return {
                bad: curState.bad + 1
            }
        })
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    };

    countPositiveFeedbackPercentage() {
        return Math.round(this.state.good / this.countTotalFeedback() * 100)
    };

    render() {
        return (
            <div>
                <p>Please leave feedback</p>

                <FeedbackOptions
                    options={'Good'}
                    onLeaveFeedback={this.countPositiveFeedback}
                />
                <FeedbackOptions
                    options={'Neutral'}
                    onLeaveFeedback={this.countNeutralFeedback}
                />
                <FeedbackOptions
                    options={'Bad'}
                    onLeaveFeedback={this.countBadFeedback}
                />

                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
            </div>
        )
    }
}

export default Feedback;
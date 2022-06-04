import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedbac = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage: ((prevState.good / prevState.total) * 100).toFixed(
          0
        ),
      };
    });
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedbac}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

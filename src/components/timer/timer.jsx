/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import './timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      isRunning: false,
    };

    this.onClickPlay = this.onClickPlay.bind(this);
    this.onClickPause = this.onClickPause.bind(this);
  }

  onClickPlay() {
    this.setState({
      isRunning: true,
    });
  }

  onClickPause() {
    this.setState({
      isRunning: false,
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.isRunning) {
        this.setState({
          time: this.state.time + 1,
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      <div className="timer">
        <button onClick={this.onClickPlay} className="icon-play"></button>
        <button onClick={this.onClickPause} className="icon-pause"></button>
        <p>{`${minutes}:${seconds}`}</p>
      </div>
    );
  }
}

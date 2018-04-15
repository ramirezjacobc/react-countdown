import React, { Component } from 'react';
import Item from './components/Item/Item';
import logo from './logo.svg';
import './App.css';
import {
  Container,
} from './styledComponents';

const secondsByDay = 60 * 60 * 24;
const secondsByHour = 60 * 60;
const secondsByMinute = 60;

class App extends Component {
  state = {
    total: 5,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    started: false
  }

  startCountDown = (data) => {
    let total = data;

    setInterval(() => {
      const days = Math.floor(total / secondsByDay);
      const hours = Math.floor((total % secondsByDay) / secondsByHour);
      const minutes = Math.floor((total % secondsByHour) / secondsByMinute);
      const seconds = Math.floor(total % secondsByMinute);

      this.setState(() => ({
        days,
        hours,
        minutes,
        seconds,
      }));
      total --;
    }, 1000);
  }

  handleClick = (e) => {
    e.preventDefault();
    const {
      total,
    } = this.state;
    const totalOfSeconds = total * 60 * 60 * 24;


    this.setState((prevState) => ({
      started: !prevState.started,
    }));
    this.startCountDown(totalOfSeconds);
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds,
      started,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Container>
          <Item title="Days" value={days} />
          <Item title="Hours" value={hours} />
          <Item title="Minutes" value={minutes} />
          <Item title="Seconds" value={seconds} />
        </Container>
        <Container>
          {
            !started &&
            <button onClick={this.handleClick}>Start countdown</button>
          }
        </Container>
      </div>
    );
  }
}

export default App;

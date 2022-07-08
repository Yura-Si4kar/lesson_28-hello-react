import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstNumber: '',
      secondNumber: '',
    };
  }
  render() {
    return <div className='code'>
      <input name='firstNumber' value={this.state.firstNumber} onChange={this.onFirstInputChange} />
      +
      <input name='secondNumber' value={this.state.secondNumber} onChange={this.onSecondInputChange} />
      = {<strong>{Number(this.state.firstNumber) + Number(this.state.secondNumber)}</strong>}
    </div>;
  }

  onFirstInputChange = (e) => {
    this.setState({
      firstNumber: e.target.value,
    });
  }
  
  onSecondInputChange = (e) => {
    this.setState({
      secondNumber: e.target.value,
    });
  }
}

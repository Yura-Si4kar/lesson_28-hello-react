import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstNumber: '',
      secondNumber: '',
      showResult: 'true',
    };
  }
  render() {
    return <div>
      <br />
      <input name='firstNumber' value={this.state.firstNumber} onChange={this.onFirstInputChange} />
      <select>
        <option name='action'>+</option>
        <option name='action'>-</option>
        <option name='action'>*</option>
        <option name='action'>/</option>
      </select>
      <input name='secondNumber' value={this.state.secondNumber} onChange={this.onSecondInputChange} />
      = {this.state.showResult ? <strong>{Number(this.state.firstNumber)+Number(this.state.secondNumber)}</strong> : ''}
      <br />
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
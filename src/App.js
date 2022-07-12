import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      firstNumber: '',
      secondNumber: '',
      action: '+',
    };
  }
  render() {
    return <div className='code'>
      <input name='firstNumber' value={this.state.firstNumber} onChange={this.onInputChange} />
      <select name='action' onChange={this.onInputChange}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'>/</option>
      </select>
      <input name='secondNumber' value={this.state.secondNumber} onChange={this.onInputChange} />
      = {<strong>{this.calculate(this.state.firstNumber,this.state.secondNumber,this.state.action)}</strong>}
    </div>;
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  calculate = (x, y, action) => {
    if (isNaN(x) || isNaN(y)) {
      return 'Wrong! Write numbers!';
    }

    switch (action) {
      case "+":
          return Number(x) + Number(y);
      case "-":
          return Number(x) - Number(y);
      case "*":
          return Number(x) * Number(y);
      case "/":
          return Number(x) / Number(y);
    }
  }
}

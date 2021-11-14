import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Debits extends Component {
  render() {
    let sum = 0;
    this.props.debits.forEach(amount => sum = sum + amount);
    return (
      <div>
        <h1>Debit Page</h1>
        <div> Debits: {sum}{this.props.debits.map(amount => <p>{amount}</p>)} </div>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

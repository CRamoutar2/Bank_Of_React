import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Debits extends Component {
  render() {
    return (
      <div>
        <h1>Debit Page</h1>
        <div> Debits: {this.props.debits} </div>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

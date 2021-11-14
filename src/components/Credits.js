import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Credits extends Component {
  render() {
    let sum = 0;
    this.props.credits.forEach(amount => sum = sum + amount);
    return (
        <div>
          <h1>Credit Page</h1>
          <div> Credits: {sum}{this.props.credits.map(amount => <p>{amount}</p>)} </div>
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

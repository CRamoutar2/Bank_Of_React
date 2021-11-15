import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import Bank from './../assets/bank.png';
    
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: [],
    }
  }

  render() {
    return (
        <div>
          <img src={Bank} alt="bank" height="100px" width="100px" />
          <h1>Bank of React</h1>
          <p><Link to ="/userProfile">User Profile</Link></p>
          <p><Link to ="/login">Login Here</Link></p>
          <p><Link to ="/Credits">View Credits</Link></p>
          <p><Link to ="/Debits">View Debits</Link></p>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}


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
          <div className="bg-green-100 h-20 flex justify-start align-middle">
            <img src={Bank} alt="bank" className="h-14 w-14 m-3" />
            <h1 className="text-4xl py-5 px-2">Bank of React</h1>
          </div>
          <div className="flex justify-center align-middle">
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
          <p><Link to ="/userProfile">User Profile</Link></p>
          <p><Link to ="/login">Login Here</Link></p>
          <div className="flex justify-center align-middle">
            <Link to ="/Credits"><p className="text-xl rounded border-2 border-green-600 p-2 m-4">View Credits</p></Link>
            <Link to ="/Debits"><p className="text-xl rounded border-2 border-green-600 p-2 m-4">View Debits</p></Link>
          </div>
        </div>
    );
  }
}


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

  // async componentDidMount() {
  //   let credits = fetch("https://moj-api.herokuapp.com/credits")
  //                 .then(res => res.json())
  //                 .then(result => {
  //                   this.setState({
  //                     ...this.state,
  //                     credit: result,
  //                   })
  //                 })
  // }

  render() {
    return (
        <div>
          <img src={Bank} alt="bank" height="100px" width="100px" />
          <h1>Bank of React</h1>
          
          <Link to ="/userProfile">User Profile</Link>
          <br></br>
          <Link to ="/login">Login Here</Link>
          <br></br>
          <Link to ="/Credits">View Credits</Link>
          <br></br>
          <Link to ="/Debits">View Debits</Link>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}


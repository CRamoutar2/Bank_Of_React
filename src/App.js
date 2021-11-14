import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 14568.28,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits:[],
      credits:[]
    }
  }

  async componentDidMount() {
    // fetch("https://moj-api.herokuapp.com/credits")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       ...this.state,
    //       credits: data,
    //     })
    //   })
    //   .then(console.log(this.state.credits))

    // fetch("https://moj-api.herokuapp.com/debits")
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       ...this.state,
    //       debits: data,
    //     })
    //   }) 
    // let debitSum = 0, creditSum = 0;
    // this.state.credits.forEach(credit => creditSum += credit.amount)
    // this.state.debits.forEach(debit => debitSum += debit.amount)
    // this.setState({
    //   ...this.setState,
    //   accountBalance: creditSum - debitSum,
    // })
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")
   
    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance});
  }

  addDebit(e) {
    e.preventDefault();
    const desc = e.target[0].value;
    const amt = Number(e.target[1].value);
    console.log(desc, amt)
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const CreditsComponent = ()=>(<Credits credits={this.state.credits} />);
    const DebitsComponent = () =>(<Debits debits={this.state.debits} addDebit={this.addDebit} />);
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
          </div>
        </Router>
    );
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
}
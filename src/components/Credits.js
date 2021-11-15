import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Credits extends Component {
  render() {
    return (
        <div>
          <h1>Credit Page</h1>
          <div> Credits: 
            {this.props.credits.map(credit => {
              let date = credit.date.slice(0,10);
              return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
            })}
          </div>
          <form onSubmit={this.props.addCredit}>
            <input type="text" name="description" />
            <input type="number" name="amount" />
            <input type="date" name="date" />
            <button type="submit">Add Credit</button>
          </form>
          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

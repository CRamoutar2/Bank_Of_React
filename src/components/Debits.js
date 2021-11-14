import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Debits extends Component {
  render() {
    return (
      <div>
        <h1>Debit Page</h1>
        <div> Debits: 
            {this.props.debits.map(debit => {
              let date = debit.date.slice(0,10);
              return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
            })} 
          </div>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

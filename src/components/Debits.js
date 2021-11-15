import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Debits extends Component {
  render() {
    return (
      <div>
        <h1>Debit Page</h1>
        <div> Debits:
        <table className="border-collapse border-2 border-green-600 m-12">
            <th className="border-2 border-green-600 p-2">Amount</th>
            <th className="border-2 border-green-600 p-2">Description</th>
            <th className="border-2 border-green-600 p-2">Date</th>
            {this.props.debits.map(debit => {
              let date = debit.date.slice(0,10);
              return (
                <tr>
                  <td className="border-2 border-green-600 p-2">${debit.amount}</td>
                  <td className="border-2 border-green-600 p-2">{debit.description}</td>
                  <td className="border-2 border-green-600 p-2">{date}</td>
                </tr>
              )
            })}
          </table>
        </div>
        <form onSubmit={this.props.addDebit}>
          <input type="text" name="description" />
          <input type="number" name="amount" />
          <input type="date" name="date" />
          <button type="submit">Add Debit</button>
        </form>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

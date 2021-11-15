import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Debits extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <h1 className="text-4xl py-5 px-2 text-center">Debit Page</h1>
        <div>
        <table className="border-collapse border-2 border-green-600 my-12 mx-auto">
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
        styling
        <form className="mx-auto" onSubmit={this.props.addDebit}>
            <input 
              type="text" 
              name="description" 
              placeholder="description" 
              className="m-2 p-2 border-2 border-green-800" 
            />
            <input 
              type="number" 
              step="0.01"
              name="amount" 
              placeholder="amount" 
              className="m-2 p-2 border-2 border-green-800" 
            />
            <input 
              type="date" 
              name="date" 
              className="m-2 p-2 border-2 border-green-800"
            />
            <button type="submit" className="border-2 border-green-800 p-2 bg-green-100 hover:scale-125 transform">Add Debit</button>
          </form>
        main
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

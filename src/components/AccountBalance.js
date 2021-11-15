import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div>
        <p className="text-2xl m-4">
          Balance: ${Math.round(this.props.accountBalance * 100) / 100}
        </p>
      </div>
    );
  }
}

export default AccountBalance;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Credits extends Component {
    render() {
      return (
          <div>
            <h1>Credit Page</h1>
            <div> Credits: {this.props.credits} </div>
            <Link to="/">Return to Home</Link>
          </div>
      );
    }
  }
  
  export default Credits;
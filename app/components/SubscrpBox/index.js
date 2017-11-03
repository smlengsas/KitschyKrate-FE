/**
*
* SubscrpBox
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class SubscrpBox extends React.PureComponent {
  render() {
    return (

      <div className="kitschyBox">

        <div className="kitschyPrice">
          <h4><p><i>Only $15.99 per Month!</i></p></h4>
        </div>

        <div className="kitschyName">
          <p>Subscribe Now!</p>
          <p>Enter your info below:</p>
        </div>

        <div className="kitschyName">
          <p><b> First Name:</b></p>
          <p><input type="text" placeholder="First Name" /></p>
        </div>


        <div className="kitschyName">
          <b>Last Name: </b>
          <p><input type="text" placeholder="Last Name"/></p>
        </div>

        <div className="kitschyName">
          <b>Street Address: </b>
          <p><input type="text" placeholder="Street Address"/></p>
          <p><input type="text" placeholder="Street Address"/></p>
        </div>

        <div className="kitschyName">
          <b>City & State: </b>
          <p><input type="text" placeholder="City, State"/></p>
        </div>

        <div className="kitschyName">
          <b>Email: </b>
          <p><input type="text" placeholder="Email"/></p>
        </div>

        <div className="kitschyName">
          <b>Payment Method: </b>
          <p><input type="checkbox"/> Visa</p>
          <p><input type="checkbox"/> Master Card</p>
          <p><input type="checkbox"/> Discover</p>
        </div>

        <input type="submit" className="submit button" value="Yes! Sign Me Up!"/>

      </div>
    );
  }
}

SubscrpBox.contextTypes = {
  router: React.PropTypes.object
};

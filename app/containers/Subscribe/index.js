/*
 *
 * Subscribe
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Subscribe extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Subscribe" meta={[ { name: 'description', content: 'Description of Subscribe' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

Subscribe.contextTypes = {
  router: React.PropTypes.object
};

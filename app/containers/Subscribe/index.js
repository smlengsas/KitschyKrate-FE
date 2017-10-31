/*
 *
 * Subscribe
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBarTop from 'components/NavBarTop';

export default class Subscribe extends React.PureComponent {
  render() {
    return (
      <div className="subscribeContainer">
        <Helmet title="Subscribe" meta={[ { name: 'description', content: 'Description of Subscribe' }]}/>

        <NavBarTop/>

      </div>
    );
  }
}

Subscribe.contextTypes = {
  router: React.PropTypes.object
};

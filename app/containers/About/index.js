/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBarTop from 'components/NavBarTop';
import AllAboutUs from 'components/AllAboutUs';

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="aboutContainer">
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <NavBarTop/>
        <AllAboutUs/>

      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object
};

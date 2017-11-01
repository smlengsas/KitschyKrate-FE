/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBarTop from 'components/NavBarTop';
import Slider from 'components/Slider';


export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="homeContainer">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <NavBarTop/>
        <Slider/>

      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};

/**
*
* NavBarBottom
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class AllAboutUs extends React.PureComponent {

  render() {
    return (
      <div className='aboutBox'>

        <header className='header'>
          <h1><p>Kitschy Krate</p></h1>
          <h3><p>Hand picked, Uniquely Themed, Eclectic Items</p>
          <p>delivered every month to you!</p></h3>
        </header>

        <div className="topSection">
          <h3><p> ~ Kitschy ~ </p>
          <p> ~ Retro ~ </p>
          <p> ~ Vintage ~ </p></h3>
        </div>

        <div className="kitschyPrice">
          <h2><p><i>Only $15.99 per Month!</i></p></h2>
        </div>

        <div className="bottomSection">
          <h2><p><i>What is Kitschy?</i></p></h2>
          <p>Kitschy is Retro... </p>
          <p>Kitschy is Vintage...</p>
          <p>Kitschy is Undiscriminating Taste...</p>
          <p>Kitschy is Everything... you love!</p>
          <h2><p><i>New Themed Items Each Month!</i></p></h2>
          <p>Each month enjoy: </p>
          <p>New Collectable Recipe cards, Stickers, Fun Stuff, Decor, Greeting Cards and of course...Toys!! </p>
        </div>



      </div>
    );
  }


}

AllAboutUs.contextTypes = {
  router: React.PropTypes.object
};

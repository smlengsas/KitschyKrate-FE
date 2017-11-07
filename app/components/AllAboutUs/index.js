/**
*
* NavBarBottom
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class AllAboutUs extends React.PureComponent {

  renderPhoto = (url) => {
    return (
     <div className="profilePhoto">
       <img src={url("../../IMAGES/teal-and-coral.jpg")} className="profilePhoto" />
     </div>
    );
  }



  render() {
    return (
      <div className='aboutBox'>

        <header className='header'>
          <h1><p>Kitschy Krate</p></h1>
          <h3><p>Hand picked, Uniquely Themed, Eclectic Items</p>
          <p>specially delivered every month to you!</p></h3>
          
        </header>

        <div className="topSection">
          <h3><p> ~ Kitschy ~ Retro ~ Vintage ~ </p></h3>
        </div>

        <div className="kitschyPrice">
          <h2><p><i>Only $15.99 per Month!*</i></p></h2>
        </div>

        <div className="middleSection">
          <h2><p><i>What is Kitschy?</i></p></h2>
          <p>Kitschy is Retro . . . </p>
          <p>Kitschy is Vintage . . . </p>
          <p>Kitschy is Undiscriminating Taste . . . </p>
          <p>Kitschy is Everything . . . <i>that you love!</i></p>
        </div>

        <article className="bottomSection">
          <header>
            <h2>
              <p><i>What is Kitschy Krate?</i></p>
            </h2>
            <h3>
            <p><smaller>New Themed Items Each Month!</smaller></p>
            </h3>
          </header>

          <section>
            <p><b>Each month enjoy: </b></p>
            <p>New Collectable Recipe Cards, Stickers, Fun Stuff, Decor, Greeting Cards,</p>
            <p>New Monthly Surprises, and of course...Toys!! </p>
          </section>

        </article>

        <footer className="footer">
          <small>
            <p><i>*Monthly Payment of $15.99. Charged to the Credit Card associated</i></p>
            <p><i>with your Kitschy Krate account. Cancel anytime.</i></p>
          </small>
        </footer>



      </div>
    );
  }


}

AllAboutUs.contextTypes = {
  router: React.PropTypes.object
};

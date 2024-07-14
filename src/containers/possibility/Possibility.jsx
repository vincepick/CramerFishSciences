import React from 'react';
import possibilityImage from '../../assets/dude.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <div className="gpt3__possibility-content2">
      <img src={possibilityImage} alt="possibility" />
      <h4>Philip Roni, Ph.D.</h4>
      <p>President, Principal Scientist, Adjunct Professor (UCSC)</p>
      </div>
    </div>
    <div className="gpt3__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">Anything Is Possible With Our Team Of Passionate Staff </h1>
      <p>Cramer Fish Sciences is built around a core group of senior scientists with distinguished careers in fish, aquatic ecology, genetics, biostatistics, and population modeling, mixed with upcoming scientists that have outstanding scholastic achievement and fresh training in leading-edge methods and technologies. Support, field research, and population monitoring is provided by teams of well-rounded full-time and seasonal technical and field staff.</p>
      <h4>See How Our Team Can Help You</h4>
    </div>
  </div>
);

export default Possibility;
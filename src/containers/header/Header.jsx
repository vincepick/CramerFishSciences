import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/vpailogoedit.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Create Something Awesome With the Glass Sphere
        </h1>
        <p>This is the best place for you to find out more about how to escape the sphere, that means you, Richardson.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="Group of people" />
          <p>300 million people requested access to join in the last 24 minutes</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="Artificial Intelligence" />
      </div>
    </div>
  );
};

export default Header;
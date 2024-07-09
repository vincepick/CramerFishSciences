import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

//creates a new features thing wherever there exists an entry in the array
const featuresData = [
  {
    title: 'Example title 0',
    text: 'This is an example text 0',
  },
  {
    title: 'Example title 1',
    text: 'This is an example for text 1',
  },
  {
    title: 'This is an example title 2 ',
    text: 'THis is an example for text 2',
  },
  {
    title: 'This is an example title 3',
    text: 'This is the text for title three',
  },
  {
    title: 'squigdame title',
    text: 'squidgame text',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        //passing in the title and text for the item
        //this is an example of the power of react, being able to use the components created
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
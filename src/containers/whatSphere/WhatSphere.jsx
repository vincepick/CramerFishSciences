import React from 'react';
import './whatSphere.css';
import Feature from '../../components/feature/Feature';

const WhatSphere = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3"  text="this is the glass sphere text"/>

      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities with the glasssphere are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="this is the text for another feature"/>
        <Feature title="Knowledgebase" text="this is the text for another feature"/>
        <Feature title="Education" text="this is the text for another feature"/>
      </div>
    </div>
  )
}

export default WhatSphere

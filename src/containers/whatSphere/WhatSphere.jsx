import React from 'react';
import './whatSphere.css';
import Feature from '../../components/feature/Feature';

const WhatSphere = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wcramer">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Why Cramer?
        </h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Fish Sciences" texts={["Solving fisheries and natural resource challenges with science for more than 30 years."]}/>
        <Feature title="Get Deeper Answers" texts={["We strive to find innovative solutions that are both practical and effective."]}/>
        <Feature title="Genetics" texts={["Cutting edge molecular biology and genetic analyses for the natural resources community."]}/>
      </div>
    </div>
  );
}

export default WhatSphere;
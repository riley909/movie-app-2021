import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className='about__container'>
      <span>This Site is about...</span>
      <span>-2021.02.19</span>
    </div>
  );
}

export default About;

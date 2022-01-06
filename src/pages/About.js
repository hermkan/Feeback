import React from 'react';
import Card from '../shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a service or product</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Card>
  );
};

export default About;

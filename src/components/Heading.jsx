import React from 'react';
import './Heading.css';

const Heading = ({ title }) => {
  return (
    <div className="custom-heading text-center py-4">
      <h1>{title}</h1>
      <p className="subtitle">Prof. Priti Kumar Roy, Jadavpur University</p>
      <hr />
    </div>
  );
};

export default Heading;

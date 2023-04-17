import React, { Component } from 'react'
import Heading from './Heading'

export class Research extends Component {
  render() {
    return (
      <div>
        <Heading title="Research" />
        <div className="m-4 d-flex flex-column justify-content-center">
          <h4>Research Area</h4>
          <ul>
            <li>Mathematical Modelling on disease Psoriasis & AIDS</li>
            <li>Ecology</li>
            <li>Epidermology</li>
          </ul>
          <h4>Research Experiences</h4>
          <ul>
            <li>Agricultural and Ecological Research Unit, Indian Statistical Institute, Kolkata, India from 1996 to 2007.</li>
            <li>Current area of Research is Mathematical Modeling on Ecology with special emphasis on transmissible disease, modeling on disease Psoriasis, HIV, Enzyme Kinetics, Biodiesel Production. </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Research
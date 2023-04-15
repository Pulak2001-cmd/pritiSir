import React, { Component } from 'react'

export class Heading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-secondary d-flex flex-column p-4" style={{minWidth: '80vw', color: '#fff'}}>
        <h3>Prof. Priti Kumar Roy</h3>
        <p style={{fontSize: 15}}>{this.props.title}</p>
      </div>
    )
  }
}

export default Heading
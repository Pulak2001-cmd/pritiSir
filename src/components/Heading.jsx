import React, { Component } from 'react'

export class Heading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bg-secondary d-flex flex-column p-4" style={{minWidth: '80vw', color: '#fff'}}>
        <h2>Prof. Priti Kumar Roy</h2>
        <p style={{fontSize: 15, fontWeight: 'bold'}}>{this.props.title}</p>
      </div>
    )
  }
}

export default Heading
import React, { Component } from 'react'
import Heading from './Heading'
import axios from 'axios'

export class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awards: [],
    }
  }
  async componentDidMount() {
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=awards";
    const response = await axios.get(url);
    this.setState({awards: response.data.data});
  }
  render() {
    return (
      <div>
        <Heading title="Awards" />
          <div className="m-5 d-flex flex-column">
            {this.state.awards.length === 0 && (
              <div className="loader-container">
                <div className="spinner"></div>
              </div>
            )}
            {this.state.awards.length !== 0 && (
              <div>
                <h4>Awards/Honor</h4>
                <ol>
                  {this.state.awards.map((i, index) =>(
                    <li key={index}>{i.Title}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
      </div>
    )
  }
}

export default Courses
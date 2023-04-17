import React, { Component } from 'react'
import Heading from './Heading'
import axios from 'axios'
import './Publications.css';

export class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [],
    }
  }
  async componentDidMount(){
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=projects";
    const response = await axios.get(url);
    this.setState({projects: response.data.data});
  }
  render() {
    return (
      <div>
        <Heading title="Projects" />
        <div className="m-4">
          <h4>Completed Projects</h4>
          {this.state.projects.length === 0 ? (
              <div className="loader-container">
                <div className="spinner"></div>
              </div>
            ): 
            (
              <ol className="mt-4">
                {this.state.projects.map((i, index)=> (
                  <li key={index} style={{margin: 2}}>{i.Title}</li>
                ))}
              </ol>
            )
          }
        </div>
      </div>
    )
  }
}

export default People
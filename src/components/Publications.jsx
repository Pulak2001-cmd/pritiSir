import React, { Component } from 'react'
import Heading from './Heading'
import axios from 'axios'
import './Publications.css';

export class Publications extends Component {
  constructor(props){
    super(props);
    this.state = {
      publications: [],
      start: 0
    }
  }
  async componentDidMount() {
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=publications";
    const response = await axios.get(url);
    this.setState({publications: response.data.data});
  }
  render() {
    return (
      <div>
        <Heading title="Publications" />
        <div className="m-5 d-flex flex-column">
          {this.state.publications.length === 0 && (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          )}
          {this.state.publications.length !== 0 && (
          <div>
          <h4>Publications</h4>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Authors</th>
                <th scope="col">Title</th>
                <th scope="col">Link</th>
                <th scope="col">Year</th>
              </tr>
            </thead>
            <tbody>
              {this.state.publications.map((i, index) =>(
                <tr key={index}>
                  <td>{i.Authors}</td>
                  <td>{i.Title}</td>
                  <td><a target="_blank" href={`${i.Link}`}>Click here</a></td>
                  <td>{i.Year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>)}
        </div>
      </div>
    )
  }
}

export default Publications
import React, { Component } from 'react'
import Heading from './Heading'
import axios from 'axios'

export class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
  }
  async componentDidMount(){
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=students";
    const response = await axios.get(url);
    this.setState({students: response.data.data});
  }
  render() {
    return (
      <div>
        <Heading title="Students" />
        <div className="m-5 d-flex flex-column">
          {this.state.students.length === 0 && (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          )}
          {this.state.students.length !== 0 && <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Student</th>
                <th scope="col">Title of Thesis</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((i, index) =>(
                <tr key={index}>
                  <td>{i.Name}</td>
                  <td>{i.Thesis}</td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>
      </div>
    )
  }
}

export default Students
import React, { Component } from 'react'
import Heading from './Heading'
import axios from 'axios'
import './Publications.css';

export class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      type: 'phd',
      loading: false,
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=students";
    const response = await axios.get(url);
    this.setState({ students: response.data.data, loading: false });
  }

  courseChangeToPhd = async () => {
    this.setState({ type: 'phd', loading: true, students: [] });
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=students";
    const response = await axios.get(url);
    this.setState({ students: response.data.data, loading: false });
  }

  courseChangeToCurrentPhd = async () => {
    this.setState({ type: 'current_phd', loading: true, students: [] });
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=Current_phd";
    const response = await axios.get(url);
    this.setState({ students: response.data.data, loading: false });
  }

  courseChangeToMsc = async () => {
    this.setState({ type: 'msc', loading: true, students: [] });
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=msc";
    const response = await axios.get(url);
    this.setState({ students: response.data.data, loading: false });
  }

  courseChangeToPostDoc = async () => {
    this.setState({ type: 'post_doc', loading: true, students: [] });
    const url = "https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=post_doc";
    const response = await axios.get(url);
    this.setState({ students: response.data.data, loading: false });
  }

  render() {
    return (
      <div>
        <Heading title="Students" />
        <div className="d-flex flex-row justify-content-around m-3 flex-wrap">
          <div onClick={this.courseChangeToPhd} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${this.state.type === 'phd' ? "bg-danger text-light" : 'text-danger'}`} style={{ cursor: 'pointer' }}>
            Awarded PhD Students
          </div>
          <div onClick={this.courseChangeToCurrentPhd} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${this.state.type === 'current_phd' ? "bg-danger text-light" : 'text-danger'}`} style={{ cursor: 'pointer' }}>
            Current PhD Students
          </div>
          <div onClick={this.courseChangeToMsc} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${this.state.type === 'msc' ? "bg-danger text-light" : "text-danger"}`} style={{ cursor: 'pointer' }}>
            MSc Students
          </div>
          <div onClick={this.courseChangeToPostDoc} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${this.state.type === 'post_doc' ? "bg-danger text-light" : "text-danger"}`} style={{ cursor: 'pointer' }}>
            Postdoc Students
          </div>
        </div>

        <div className="m-5 d-flex flex-column">
          {this.state.loading && (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          )}
          {this.state.students.length !== 0 &&
  <table className="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Student</th>
        <th scope="col">
          {this.state.type === 'msc'
            ? 'Title of Project'
            : this.state.type === 'post_doc'
            ? 'Research Topic'
            : 'Title of Thesis'}
        </th>
      </tr>
    </thead> {/* ✅ FIX: Close thead properly */}
    <tbody>
      {this.state.students.map((i, index) => (
        <tr key={index}>
          <td>{i.Name}</td>
          <td>
            {this.state.type === 'msc'
              ? i.Thesis || 'N/A'
              : this.state.type === 'post_doc'
              ? i.Topic || i.Thesis || 'N/A'
              : i.Thesis || 'N/A'}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
}

export default Students;

import React, { Component } from 'react';
import Heading from './Heading';
import axios from 'axios';
import './Publications.css';

export class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      type: 'phd',
      loading: false,
    };
  }

  // Normalize keys to prevent whitespace issues (especially NBSP)
  cleanKeys = (obj) =>
    Object.fromEntries(
      Object.entries(obj).map(([k, v]) => {
        const cleanKey = k.replace(/\u00A0/g, ' ').trim(); // remove NBSP and trim
        const cleanValue = typeof v === 'string' ? v.trim() : v;
        return [cleanKey, cleanValue];
      })
    );

  async fetchStudents(page, type) {
    this.setState({ type, loading: true, students: [] });
    const url = `https://script.google.com/macros/s/AKfycbxATDI60mhkONYhLRv9na5ODgA8FVzXDLjkESNKFklD0z_K3RL4g9OTqzAjY2h_rnr4-g/exec?page=${page}`;
    try {
      const response = await axios.get(url);
      const cleanedData = response.data.data.map(this.cleanKeys);
      this.setState({ students: cleanedData, loading: false });
    } catch (error) {
      console.error('Error fetching students:', error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchStudents('students', 'phd');
  }

  courseChangeToPhd = () => this.fetchStudents('students', 'phd');
  courseChangeToCurrentPhd = () => this.fetchStudents('Current_phd', 'current_phd');
  courseChangeToMsc = () => this.fetchStudents('msc', 'msc');
  courseChangeToPostDoc = () => this.fetchStudents('post_doc', 'post_doc');

  render() {
    const { students, type, loading } = this.state;

    return (
      <div>
        <Heading title="Students" />
        <div className="d-flex flex-row justify-content-around m-3 flex-wrap">
          <div onClick={this.courseChangeToPhd} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${type === 'phd' ? "bg-danger text-light" : 'text-danger'}`} style={{ cursor: 'pointer' }}>
            Awarded PhD Students
          </div>
          <div onClick={this.courseChangeToCurrentPhd} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${type === 'current_phd' ? "bg-danger text-light" : 'text-danger'}`} style={{ cursor: 'pointer' }}>
            Current PhD Students
          </div>
          <div onClick={this.courseChangeToMsc} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${type === 'msc' ? "bg-danger text-light" : 'text-danger'}`} style={{ cursor: 'pointer' }}>
            MSc Students
          </div>
          <div onClick={this.courseChangeToPostDoc} className={`col-3 text-center border border-1 border-danger rounded-2 m-2 p-2 ${type === 'post_doc' ? "bg-danger text-light" : 'text-danger'}`} style={{ cursor: 'pointer' }}>
            Post‑doctoral Fellow
          </div>
        </div>

        <div className="m-5 d-flex flex-column">
          {loading && (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          )}

          {!loading && students.length > 0 && (
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>Name</th>
                  {type === 'post_doc' && <th>Funding Agency</th>}
                  {type === 'post_doc' && <th>Year</th>}
                  {type !== 'post_doc' && (
                    <th>{type === 'msc' ? 'Title of Project' : 'Title of Thesis'}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {students.map((i, idx) => (
                  <tr key={idx}>
                    <td>{i.Name || 'N/A'}</td>
                    {type === 'post_doc' ? (
                      <>
                        <td>{i["Funding Agency"] || 'N/A'}</td>
                        <td>{i.Year || 'N/A'}</td>
                      </>
                    ) : (
                      <td>{i.Thesis || 'N/A'}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {!loading && students.length === 0 && (
            <div className="text-center mt-3 text-muted">
              No data available for this category.
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Students;

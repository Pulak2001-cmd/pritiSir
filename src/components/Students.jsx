import React, { Component } from 'react';
import Heading from './Heading';
import axios from 'axios';
import './Students.css';

export class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      type: 'phd',
      loading: false,
    };
  }

  cleanKeys = (obj) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.trim(), v]));

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
  courseChangeToPostDoc = () => this.fetchStudents('Post_doc_fellow', 'post_doc');

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
            Post‑doctoral Fellows
          </div>
        </div>

        <div className="m-5 d-flex flex-column">
          {loading && (
            <div className="loader-container">
              <div className="spinner"></div>
              <div className="loader-text">Fetching students records, please wait...</div>
            </div>
          )}

          {!loading && students.length > 0 && (
            <>
              <div className="section-title">
                {type === 'phd' && 'Awarded PhD Students'}
                {type === 'current_phd' && 'Current PhD Students'}
                {type === 'msc' && 'MSc Students'}
                {type === 'post_doc' && 'Post-doctoral Fellows'}
              </div>

              <div className="student-grid">
                {students.map((student, idx) => (
                  <div className="student-card" key={idx}>
                    <div className="student-name">{student.Name || 'N/A'}</div>
                    {type === 'post_doc' && (
                      <>
                        <div className="student-detail">Designation: {student.Designation || 'N/A'}</div>
                        <div className="student-detail">Funding: {student["Funding Agency"] || 'N/A'}</div>
                        <div className="student-detail">Year: {student.Year || 'N/A'}</div>
                      </>
                    )}
                    {type !== 'post_doc' && (
                      <div className="student-detail">
                        {type === 'msc' ? 'Project: ' : 'Thesis: '}
                        {student.Thesis || 'N/A'}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
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

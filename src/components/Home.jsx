import React, { Component } from 'react';
import Heading from './Heading';
import './Home.css'; 

export class Home extends Component {
  render() {
    return (
      <div>
        <Heading title="Home" />
        <div className="m-4">
          <h2>Prof. Priti Kumar Roy</h2>
          <div className="d-flex flex-row mt-4">
            <img src="/photo.jpg" alt="" style={{ height: 230, width: 210 }} />
            <div className="m-3 d-flex flex-column justify-content-center">
              <p style={{ margin: 0 }}>Professor</p>
              <p style={{ margin: 0 }}>Department of Mathematics</p>
              <p style={{ margin: 0 }}>Jadavpur University</p>
              <p style={{ margin: 0 }}>Kolkata-70032</p>
              <p style={{ margin: 0 }}>West Bengal, India</p>
              <p style={{ margin: 0 }}>
                <a href="https://www.sciencedirect.com/journal/mathematical-biosciences">
                  Editorial Board Member: Mathematical Biosciences
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <a href="mailto:pritiju@gmail.com">pritiju@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h2>Professional Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>Lecturer in Mathematics</h3>
                  <span>2001 - 2006</span>
                  <p>Darjeeling Govt. College Darjeeling, W.B., India</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>Senior Lecturer in Mathematics</h3>
                  <span>2006 - 2009</span>
                  <p>Barasat Govt. College, Barasat, Kolkata-700124, W.B., India</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>Reader</h3>
                  <span>2009 - 2012</span>
                  <p>Jadavpur University, Jadavpur, Kolkata-700032, West Bengal, India</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>Associate Professor</h3>
                  <span>2012 - 2015</span>
                  <p>Jadavpur University, Jadavpur, Kolkata-700032, West Bengal, India</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3>Professor</h3>
                  <span>2015 - Present</span>
                  <p>Jadavpur University, Jadavpur, Kolkata-700032, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnnouncementSection />
      </div>
    );
  }
}

class AnnouncementSection extends Component {
  render() {
    return (
      <div className="announcement-section">
        <h2>Upcoming Events</h2>

        <div className="event">
          <span className="blink">Event 1: </span>
        </div>

        <div className="event">
          <span className="blink">Event 2: </span>
        </div>

        <div className="highlighted-announcement">
          <div className="scrolling-text">
            Upcoming Collaborative Research Visit at&nbsp;
            <a href="https://english.btbu.edu.cn/" target="_blank" rel="noopener noreferrer">
              <strong>Beijing Technology and Business University (BTBU), China</strong>
            </a>&nbsp;from <strong>18 May 2025</strong> to <strong>14 June 2025</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

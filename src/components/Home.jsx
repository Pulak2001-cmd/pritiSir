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
            <ul>
              <li className="m-1">Lecturer in Mathematics from 2001 to 2006 in Darjeeling Govt. College Darjeeling, W.B., India</li>
              <li className="m-1">Senior Lecturer in Mathematics from 2006 to 2009 in Barasat Govt. College, Barasat, Kolkata-700124, W.B., India</li>
              <li className="m-1">Reader from 2009 to 2012 in Jadavpur University, Jadavpur, Kolkata-700032, West Bengal, India</li>
              <li className="m-1">Associate Professor from 2012 to 2015 in Jadavpur University, Jadavpur, Kolkata-700032, West Bengal, India</li>
              <li className="m-1">Professor from 2015 to till now in Jadavpur University, Jadavpur, Kolkata-700032, West Bengal, India</li>
            </ul>
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

        {/* 🔔 Highlighted Scrolling Announcement */}
        <div className="highlighted-announcement">
  Upcoming Collaborative Research Visit at <a href="https://english.btbu.edu.cn/" target="_blank" rel="noopener noreferrer"><strong>Beijing Technology and Business University (BTBU), China</strong></a> from <strong>18th May 2025</strong> to <strong>14th June 2025</strong>
</div>
      </div>
    );
  }
}

export default Home;

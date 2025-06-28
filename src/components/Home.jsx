import React, { Component } from 'react';
import Heading from './Heading';
import './Home.css'; 

export class Home extends Component {
  render() {
    return (
      <div>
        <Heading title="Home" />
        <div className="m-4">
          {/* Profile Card Section */}
          <div className="profile-card d-flex flex-column flex-md-row align-items-center p-4 my-4 shadow rounded">
            <img src="/photo.jpg" alt="Prof. Priti Kumar Roy" className="profile-photo me-md-4 mb-3 mb-md-0" />
            <div className="profile-info">
              <h4>Prof. Priti Kumar Roy</h4>
              <p>Professor, Department of Mathematics</p>
              <p>Jadavpur University, Kolkata-700032</p>
              <p>West Bengal, India</p>
              <p>
                <a href="mailto:pritiju@gmail.com">pritiju@gmail.com</a>
              </p>
              <p>
                <a href="https://www.sciencedirect.com/journal/mathematical-biosciences" target="_blank" rel="noopener noreferrer">
                  Editorial Board Member: Mathematical Biosciences
                </a>
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-5">
            <h2>Professional Experience</h2>
            <ul>
              <li className="m-1">Lecturer in Mathematics (2001–2006), Darjeeling Govt. College, W.B.</li>
              <li className="m-1">Senior Lecturer (2006–2009), Barasat Govt. College, Kolkata</li>
              <li className="m-1">Reader (2009–2012), Jadavpur University</li>
              <li className="m-1">Associate Professor (2012–2015), Jadavpur University</li>
              <li className="m-1">Professor (2015–Present), Jadavpur University</li>
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
  <div className="scrolling-text">
    🔔 <strong>Now Inviting Applications</strong>: Interested in hosting a <strong>Post-Doctoral Fellow</strong> in the area of <em>Mathematical Biology and Complex Systems</em>. 
    If you are a motivated researcher looking for collaborative opportunities, feel free to reach out via email at&nbsp;
    <a href="mailto:pritiju@gmail.com"><strong>pritiju@gmail.com</strong></a>
  </div>
</div>

      </div>
    );
  }
}

export default Home;

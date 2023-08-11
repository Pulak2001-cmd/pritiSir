import React, { Component } from 'react'
import Heading from './Heading'

export class Home extends Component {
  render() {
    return (
      <div>
        <Heading title="Home"/>
        <!DOCTYPE html>
<html>
<head>
  <title>My Personal Webpage</title>
  <style>
    /* Add your custom CSS styles here */
    /* For example, you can style the event display area */
    #event-display {
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Personal Webpage</h1>
  <p>Current Event:</p>
  <div id="event-display">No event scheduled</div>

  <button onclick="changeEvent()">Change Event</button>

  <script>
    function changeEvent() {
      // Use a JavaScript prompt to get the event input from the user
      const newEvent = prompt("Enter the new event for this month:");
      
      // Update the event display area with the new event
      const eventDisplay = document.getElementById("event-display");
      eventDisplay.innerText = newEvent;
    }
  </script>
</body>
</html>

        
        <div className="m-4">
          <h2>Prof. Priti Kumar Roy</h2>
          <div className="d-flex flex-row mt-4">
            <img src="/photo.jpg" alt="" style={{height: 230, width: 210}} />
            <div className='m-3 d-flex flex-column justify-content-center'>
              
              <p style={{margin: 0}}>Professor</p>
              <p style={{margin: 0}}>Department of Mathematics</p>
              <p style={{margin: 0}}>Jadavpur University</p>
              <p style={{margin: 0}}>Kolkata-70032</p>
              <p style={{margin: 0}}>West Bengal, India</p>
              <p style={{margin: 0}}> <a href="https://www.sciencedirect.com/journal/mathematical-biosciences"> Editorial Board Member: Mathematical Biosciences </a> </p>
              <p style={{margin: 0}}> <a href="mailto:pritiju@gmail.com"> pritiju@gmail.com</a> </p>
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
      </div>
    )
  }
}

export default Home

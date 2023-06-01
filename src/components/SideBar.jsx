import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
  let path = useLocation().pathname;
  console.log(path);
  if(path.length === 1){
    path = 'home';
  }else {
    path = path.slice(1, );
  }
  const [currPage, setCurrPage] = React.useState(path);
  return (
    <div className="d-flex flex-column bg-dark p-3 sidebar">
        <div className="d-flex flex-column align-items-center">
        <img src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif" alt="" style={{height: 200, width: 200}} />
        <p style={{color: '#fff'}}>Jadavpur University</p>
        </div>
        <ul style={{color: '#fff', listStyle: 'none'}}>
            <Link className="nav-link" onClick={()=> setCurrPage('home')} to="/"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'home' ? 'bold':'normal'}`}}>Home</li></Link>
            <Link className="nav-link" onClick={()=> setCurrPage('research')} to="/research"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'research' ? 'bold':'normal'}`}}>Research</li></Link>
            <Link className="nav-link" onClick={()=> setCurrPage('publications')} to="/publications"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'publications' ? 'bold':'normal'}`}}>Publications</li></Link>
            <Link className="nav-link" onClick={()=> setCurrPage('people')} to="/projects"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'people' ? 'bold':'normal'}`}}>Project</li></Link>
            <Link className="nav-link" onClick={()=> setCurrPage('courses')} to="/courses"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'courses' ? 'bold':'normal'}`}}>Awards</li></Link>
            <Link className="nav-link" onClick={()=> setCurrPage('students')} to="/students"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'students' ? 'bold':'normal'}`}}>Prospective Students</li></Link>
            <Link className="nav-link" onClick={()=> setCurrPage('books')} to="/books"><li style={{borderBottom: '0.5px solid #ccc', padding: 5, cursor: 'pointer', fontWeight: `${currPage === 'books' ? 'bold':'normal'}`}}>Books Published</li></Link>
        </ul>
      </div>
  )
}

export default SideBar
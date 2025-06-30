import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Publications', path: '/publications' },
  { label: 'Projects', path: '/projects' },
  { label: 'Awards', path: '/courses' },
  { label: 'Prospective Students', path: '/students' },
  { label: 'Books Published', path: '/books' }
];

function SideBar() {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif"
          alt="Logo"
          className="sidebar-logo"
        />
        <p className="sidebar-title">Jadavpur University</p>
      </div>

      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`sidebar-link ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

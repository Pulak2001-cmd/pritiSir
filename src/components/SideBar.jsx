import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';

const navItems = [
  { label: 'Home', route: '/' },
  { label: 'Research', route: '/research' },
  { label: 'Publications', route: '/publications' },
  { label: 'Projects', route: '/projects' },
  { label: 'Awards', route: '/courses' },
  { label: 'Prospective Students', route: '/students' },
  { label: 'Books Published', route: '/books' },
];

function SideBar() {
  const location = useLocation();
  const [currPage, setCurrPage] = useState('');

  useEffect(() => {
    setCurrPage(location.pathname === '/' ? '/' : location.pathname);
  }, [location]);

  return (
    <div className="d-flex flex-column bg-dark p-3 sidebar">
      <div className="d-flex flex-column align-items-center mb-4">
        <img
          src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif"
          alt="Logo"
          style={{ height: 200, width: 200 }}
        />
        <p style={{ color: '#fff' }}>Jadavpur University</p>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {navItems.map((item) => (
          <Link
            key={item.route}
            className="nav-link"
            to={item.route}
            onClick={() => setCurrPage(item.route)}
          >
            <li
              className={`sidebar-item ${
                currPage === item.route ? 'active-link' : ''
              }`}
            >
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

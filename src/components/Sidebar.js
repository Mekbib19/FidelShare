import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const location = useLocation();
  
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard', path: '/dashboard' },
    { id: 'teachers', icon: 'fas fa-chalkboard-teacher', label: 'Teachers', path: '/teachers' },
    { id: 'courses', icon: 'fas fa-book', label: 'Courses', path: '/courses' },
    { id: 'materials', icon: 'fas fa-file-alt', label: 'Materials', path: '/materials' },
    { id: 'ratings', icon: 'fas fa-star', label: 'Ratings', path: '/ratings' },
    { id: 'students', icon: 'fas fa-user-graduate', label: 'Students', path: '/students' },
    { id: 'announcements', icon: 'fas fa-bullhorn', label: 'Announcements', path: '/announcements' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings', path: '/settings' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="fas fa-graduation-cap"></i>
        <h2>Fidel Share</h2>
      </div>
      
      <div className="sidebar-menu">
        <ul>
          {menuItems.map(item => (
            <li 
              key={item.id}
              className={location.pathname === item.path ? 'active' : ''}
            >
              <Link 
                to={item.path} 
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
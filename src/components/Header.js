import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname.substring(1);
    if (path === '') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1>{getPageTitle()}</h1>
      </div>
      
      <div className="header-right">
        <div className="notifications">
          <i className="fas fa-bell"></i>
        </div>
        
        <div className="user-profile">
          <div className="user-avatar">
            {user?.name?.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="user-info">
            <div className="user-name">{user?.name}</div>
            <div className="user-role">{user?.role}</div>
          </div>
          <button onClick={onLogout} className="btn btn-danger" style={{marginLeft: '10px'}}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
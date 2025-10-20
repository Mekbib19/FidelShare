import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('student');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock user data based on role
    const userData = {
      id: userId,
      role: selectedRole,
      name: getDefaultName(selectedRole),
      department: 'Computer Science'
    };
    
    onLogin(userData);
  };

  const getDefaultName = (role) => {
    switch (role) {
      case 'student': return 'John Doe';
      case 'teacher': return 'Dr. Samuel Johnson';
      case 'hod': return 'Prof. Maria Garcia';
      default: return 'User';
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2><i className="fas fa-graduation-cap"></i> Fidel Share</h2>
          <p>Educational Resource Platform</p>
        </div>
        
        <div className="role-selector">
          <div 
            className={`role-option ${selectedRole === 'student' ? 'active' : ''}`}
            onClick={() => setSelectedRole('student')}
          >
            Student
          </div>
          <div 
            className={`role-option ${selectedRole === 'teacher' ? 'active' : ''}`}
            onClick={() => setSelectedRole('teacher')}
          >
            Teacher
          </div>
          <div 
            className={`role-option ${selectedRole === 'hod' ? 'active' : ''}`}
            onClick={() => setSelectedRole('hod')}
          >
            HOD
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="user-id">UGR ID</label>
            <input 
              type="text" 
              id="user-id" 
              placeholder="Enter your UGR ID" 
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
              Login
            </button>
          </div>
          
          <div style={{textAlign: 'center'}}>
            <a href="#" style={{color: 'var(--secondary)'}}>Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
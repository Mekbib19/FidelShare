import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    teachers: 0,
    students: 0,
    rating: 0,
    courses: 0
  });

  useEffect(() => {
    // Initialize with random data
    setStats({
      teachers: Math.floor(Math.random() * 10) + 20,
      students: Math.floor(Math.random() * 500) + 1000,
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      courses: Math.floor(Math.random() * 20) + 30
    });
  }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="card">
          <div className="card-header">
            <div className="card-icon teacher">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
          </div>
          <div className="card-value">{stats.teachers}</div>
          <div className="card-title">Total Teachers</div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <div className="card-icon student">
              <i className="fas fa-user-graduate"></i>
            </div>
          </div>
          <div className="card-value">{stats.students}</div>
          <div className="card-title">Total Students</div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <div className="card-icon rating">
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="card-value">{stats.rating}</div>
          <div className="card-title">Average Rating</div>
        </div>
        
        <div className="card">
          <div className="card-header">
            <div className="card-icon course">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <div className="card-value">{stats.courses}</div>
          <div className="card-title">Total Courses</div>
        </div>
      </div>
      
      <div className="charts">
        <div className="chart-container">
          <div className="chart-header">
            <div className="chart-title">Teacher Performance</div>
          </div>
          <div className="chart">
            Teacher Performance Chart (Bar Chart)
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header">
            <div className="chart-title">Student Engagement</div>
          </div>
          <div className="chart">
            Student Engagement Chart (Line Chart)
          </div>
        </div>
      </div>
      
      <div className="table-container">
        <div className="table-header">
          <h3>Recent Activity</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>User</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr. Samuel uploaded a new PPT for Networking</td>
              <td>Teacher</td>
              <td>2023-10-15</td>
            </tr>
            <tr>
              <td>Student Yibe rated 'Database Systems' 5 stars</td>
              <td>Student</td>
              <td>2023-10-14</td>
            </tr>
            <tr>
              <td>New announcement: Midterm exam schedule</td>
              <td>HOD</td>
              <td>2023-10-13</td>
            </tr>
            <tr>
              <td>Course material updated for Software Engineering</td>
              <td>Teacher</td>
              <td>2023-10-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
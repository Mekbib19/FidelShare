import React from 'react';

const Teachers = () => {
  const teachers = [
    {
      name: 'Dr. Samuel Johnson',
      email: 'samuel.j@university.edu',
      courses: 'Networking, Security',
      rating: 4,
      status: 'Active'
    },
    {
      name: 'Prof. Maria Garcia',
      email: 'maria.g@university.edu',
      courses: 'Database Systems, Algorithms',
      rating: 5,
      status: 'Active'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map(star => (
          <i 
            key={star}
            className={`fas fa-star ${star <= rating ? 'active' : ''}`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h3>Teacher Management</h3>
        <button className="btn btn-primary">Add New Teacher</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Assigned Courses</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.courses}</td>
              <td>
                {renderStars(teacher.rating)}
                {teacher.rating}.0
              </td>
              <td><span className="status active">{teacher.status}</span></td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
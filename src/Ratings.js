import React, { useState } from 'react';

const Ratings = () => {
  const [ratings] = useState([
    {
      teacher: 'Prof. Maria Garcia',
      course: 'Database Systems',
      averageRating: 5.0,
      totalRatings: 42,
      reviews: [
        { student: 'John Doe', rating: 5, comment: 'Excellent teacher!', date: '2023-10-15' },
        { student: 'Jane Smith', rating: 5, comment: 'Very clear explanations', date: '2023-10-14' }
      ]
    },
    {
      teacher: 'Dr. Samuel Johnson',
      course: 'Computer Networks',
      averageRating: 4.2,
      totalRatings: 38,
      reviews: [
        { student: 'Mike Johnson', rating: 4, comment: 'Good course material', date: '2023-10-13' },
        { student: 'Sarah Wilson', rating: 5, comment: 'Helpful and knowledgeable', date: '2023-10-12' }
      ]
    },
    {
      teacher: 'Dr. Robert Brown',
      course: 'Software Engineering',
      averageRating: 4.7,
      totalRatings: 35,
      reviews: [
        { student: 'Alex Chen', rating: 5, comment: 'Practical assignments', date: '2023-10-11' },
        { student: 'Emily Davis', rating: 4, comment: 'Good project guidance', date: '2023-10-10' }
      ]
    }
  ]);

  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [newReview, setNewReview] = useState({
    teacher: '',
    course: '',
    rating: 5,
    comment: ''
  });

  const renderStars = (rating, interactive = false, onRate = null) => {
    return (
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map(star => (
          <i 
            key={star}
            className={`fas fa-star ${star <= rating ? 'active' : ''} ${interactive ? 'interactive' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          ></i>
        ))}
      </div>
    );
  };

  const handleViewDetails = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleCloseDetails = () => {
    setSelectedTeacher(null);
  };

  const handleNewReviewChange = (field, value) => {
    setNewReview(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    alert('Review submitted successfully!');
    setNewReview({
      teacher: '',
      course: '',
      rating: 5,
      comment: ''
    });
  };

  const exportReport = () => {
    // Simulate report export
    alert('Ratings report exported successfully!');
  };

  return (
    <div>
      {/* Rating Summary Table */}
      <div className="table-container">
        <div className="table-header">
          <h3>Teacher Ratings & Feedback</h3>
          <button className="btn btn-primary" onClick={exportReport}>
            Export Report
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Teacher</th>
              <th>Course</th>
              <th>Average Rating</th>
              <th>Total Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating, index) => (
              <tr key={index}>
                <td>{rating.teacher}</td>
                <td>{rating.course}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {renderStars(rating.averageRating)}
                    {rating.averageRating.toFixed(1)}
                  </div>
                </td>
                <td>{rating.totalRatings}</td>
                <td>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleViewDetails(rating)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit New Review Section */}
      <div className="card" style={{ marginTop: '30px' }}>
        <h3>Submit New Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div className="form-group">
            <label htmlFor="review-teacher">Teacher</label>
            <input 
              type="text" 
              id="review-teacher"
              value={newReview.teacher}
              onChange={(e) => handleNewReviewChange('teacher', e.target.value)}
              placeholder="Enter teacher's name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="review-course">Course</label>
            <input 
              type="text" 
              id="review-course"
              value={newReview.course}
              onChange={(e) => handleNewReviewChange('course', e.target.value)}
              placeholder="Enter course name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Rating</label>
            <div style={{ marginTop: '10px' }}>
              {renderStars(newReview.rating, true, (rating) => 
                handleNewReviewChange('rating', rating)
              )}
              <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                {newReview.rating}.0
              </span>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="review-comment">Comment</label>
            <textarea 
              id="review-comment"
              rows="4"
              value={newReview.comment}
              onChange={(e) => handleNewReviewChange('comment', e.target.value)}
              placeholder="Share your experience..."
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>

      {/* Rating Details Modal */}
      {selectedTeacher && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3>{selectedTeacher.teacher} - {selectedTeacher.course}</h3>
              <button 
                onClick={handleCloseDetails}
                className="btn btn-danger"
                style={{ padding: '5px 10px' }}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {renderStars(selectedTeacher.averageRating)}
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {selectedTeacher.averageRating.toFixed(1)}
                  </span>
                </div>
                <p style={{ color: '#777', marginTop: '5px' }}>
                  Based on {selectedTeacher.totalRatings} reviews
                </p>
              </div>
            </div>
            
            <div>
              <h4>Recent Reviews</h4>
              {selectedTeacher.reviews.map((review, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '15px',
                    border: '1px solid #eee',
                    borderRadius: '5px',
                    marginBottom: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <strong>{review.student}</strong>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {renderStars(review.rating)}
                      <span style={{ color: '#777', fontSize: '0.9rem' }}>{review.date}</span>
                    </div>
                  </div>
                  <p style={{ margin: 0 }}>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Rating Statistics */}
      <div className="charts" style={{ marginTop: '30px' }}>
        <div className="chart-container">
          <div className="chart-header">
            <div className="chart-title">Rating Distribution</div>
          </div>
          <div className="chart">
            <div style={{ textAlign: 'center', width: '100%' }}>
              <h4>Rating Distribution</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                {[5, 4, 3, 2, 1].map(stars => (
                  <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{stars} stars</span>
                    <div 
                      style={{
                        flex: 1,
                        height: '20px',
                        background: '#e0e0e0',
                        borderRadius: '10px',
                        overflow: 'hidden'
                      }}
                    >
                      <div 
                        style={{
                          height: '100%',
                          background: '#3498db',
                          width: `${(stars / 5) * 100}%`,
                          borderRadius: '10px'
                        }}
                      ></div>
                    </div>
                    <span>{Math.round((stars / 5) * 100)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header">
            <div className="chart-title">Rating Trends</div>
          </div>
          <div className="chart">
            <div style={{ textAlign: 'center' }}>
              <h4>Average Rating Over Time</h4>
              <p style={{ color: '#777', marginTop: '20px' }}>
                Rating trends chart would be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
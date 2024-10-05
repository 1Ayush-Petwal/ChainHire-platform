import React, { useState, useEffect } from 'react';

const JobPostForm = () => {
  // Initial state for form inputs
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobDescription: '',
    requirements: '',
    salaryRange: '',
    jobType: '',
    logoUrl: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  // Handle form submission (Job Post)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can post jobDetails to a backend here using Axios or Fetch API
    console.log("Job Posted: ", jobDetails);

    // Reset form after submission
    setJobDetails({
      jobTitle: '',
      companyName: '',
      location: '',
      jobDescription: '',
      requirements: '',
      salaryRange: '',
      jobType: '',
      logoUrl: '',
    });
  };

  useEffect(() => {
    // Ensure Particles is initialized correctly
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
        },
        opacity: {
          value: 2, // Adjusted for better visibility
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    });
  }, []);
  
  return (
    <div>
      <div id="particles-js" style={styles.particlesContainer}></div>

      <div style={styles.formContainer}>
        <h2 style={styles.formHeader}>Post a Job Opening</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="jobTitle" style={styles.label}>Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={jobDetails.jobTitle}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="companyName" style={styles.label}>Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={jobDetails.companyName}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="location" style={styles.label}>Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="jobDescription" style={styles.label}>Job Description:</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={jobDetails.jobDescription}
              onChange={handleInputChange}
              required
              style={styles.textArea}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="requirements" style={styles.label}>Requirements:</label>
            <textarea
              id="requirements"
              name="requirements"
              value={jobDetails.requirements}
              onChange={handleInputChange}
              required
              style={styles.textArea}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="salaryRange" style={styles.label}>Salary Range:</label>
            <input
              type="text"
              id="salaryRange"
              name="salaryRange"
              value={jobDetails.salaryRange}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="jobType" style={styles.label}>Job Type:</label>
            <select
              id="jobType"
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleInputChange}
              required
              style={styles.input}
            >
              <option value="">Select job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>


          <button type="submit" style={styles.postButton}>Post Job</button>
        </form>
      </div>
    </div>
  );
};

// Styles for the form and card
const styles = {
  particlesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1', // Make sure particles are behind the content
  },
  formContainer: {
    width: '450px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    border:"0.1px solid #fff",
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    marginTop: "5.2rem",
    backgroundColor:"#000",
  },
  formHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#fff', // White text color for contrast
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    color: '#fff', // Change to your desired color for labels
  },
  input: {
    width: '95%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #444', // Darker border for dark theme
    marginTop: '5px',
    backgroundColor: '#444', // Dark input background
    color: '#fff', // White text color for input
  },
  textArea: {
    width: '95%',
    height: '30px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #444', // Darker border for dark theme
    marginTop: '5px',
    resize: 'vertical',
    backgroundColor: '#444', // Dark textarea background
    color: '#fff', // White text color for textarea
  },
  postButton: {
    padding: '10px',
    backgroundColor: '#28a745', // Green button color
    color: '#fff',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default JobPostForm;

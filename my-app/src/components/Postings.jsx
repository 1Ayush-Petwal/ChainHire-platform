import React, { useEffect } from 'react';
import 'particles.js';
import jobData from './jobPostData'; // Import job data

const JobPostCard = () => {

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
      {/* Particles.js background */}
      <div id="particles-js" style={styles.particlesContainer}></div>
      
      {/* Job Cards */}
      <div style={styles.container}>
        {jobData.map((job) => (
          <div key={job.id} style={styles.cardContainer}>
            {/* Card Header with Logo, Job Title, and Company */}
            <div style={styles.cardHeader}>
              <img src={job.logo} alt={`${job.companyName} logo`} style={styles.logo} />
              <div>
                <h2 style={styles.jobTitle}>{job.jobTitle}</h2>
                <p style={styles.companyName}>{job.companyName}</p>
                <p style={styles.location}>{job.location}</p>
              </div>
            </div>

            {/* Job Description */}
            <div style={styles.cardBody}>
              <p style={styles.jobDescription}>{job.jobDescription}</p>
            </div>

            {/* Apply Button */}
            <div style={styles.cardFooter}>
              <button style={styles.applyButton}>Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for particles and row layout
const styles = {
  particlesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1', // Make sure particles are behind the content
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '10px',
    position: 'relative', // Ensure job cards are positioned relative to the particles
    zIndex: '1',
  },
  cardContainer: {
    width: '350px',
    backgroundColor: '#000',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    margin: '10px',
    padding: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '0.1px solid #fff',
    marginTop: '5rem',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #444',
    paddingBottom: '10px',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '15px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  jobTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    margin: '0 0 5px',
  },
  companyName: {
    fontSize: '14px',
    color: '#bbb',
    margin: '0',
  },
  location: {
    fontSize: '12px',
    color: '#aaa',
    margin: '0',
  },
  cardBody: {
    marginTop: '15px',
  },
  jobDescription: {
    fontSize: '16px',
    color: '#ccc',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
  cardFooter: {
    marginTop: '20px',
    textAlign: 'center',
  },
  applyButton: {
    padding: '10px 20px',
    backgroundColor: '#FF5722',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default JobPostCard;

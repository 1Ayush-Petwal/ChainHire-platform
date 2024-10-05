import React, { useEffect } from 'react';
import Particles from 'particles.js';

const JobCard = () => {
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
          value: 2,
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
      <div id="particles-js" style={styles.particleContainer}></div>
      <div style={styles.jobApplyPage}>
        <h1 style={styles.title}>Apply for the Job</h1>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="resume">Resume</label>
            <input type="file" id="resume" required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" style={{ ...styles.input, resize: 'vertical' }}></textarea>
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  
  particleContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  jobApplyPage: {
    width: '450px',
    height:'500px',
    margin: '0 auto',
    marginTop:"10rem",
    padding: '20px',
    backgroundColor: '#000000',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '95%',
    padding: '10px',
    border: '1px solid #444444',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#333333',
    color: '#ffffff',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#FF0000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default JobCard;

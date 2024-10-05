import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const SignInPage = () => {
  // Handle sign-in as recruiter
  const handleRecruiterSignIn = (e) => {
    e.preventDefault();
    // Implement recruiter sign-in logic here
    console.log("Signing in as recruiter...");
  };

  // Handle sign-in as user
  const handleUserSignIn = (e) => {
    e.preventDefault();
    // Implement user sign-in logic here
    console.log("Signing in as user...");
  };

  useEffect(() => {
    // Initialize Particle.js
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
      <div id="particles-js" style={styles.particlesContainer}></div>

      <div style={styles.formContainer}>
        <h2 style={styles.formHeader}>Sign In</h2>
        
        <div style={styles.buttonGroup}>
          <button onClick={handleRecruiterSignIn} style={styles.signInButton}>
            Sign In as Recruiter
          </button>
          <button onClick={handleUserSignIn} style={styles.signInButton}>
            Sign In as User
          </button>
        </div>

        {/* Line for existing users with login link */}
        <div style={styles.existingUser}>
          Already have an account?{' '}
          <Link to="/login" style={styles.loginLink}>
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

// Styles for the form and background
const styles = {
  particlesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1', // Make sure particles are behind the content
  },
  formContainer: {
    width: '400px',
    margin: '100px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for contrast
  },
  formHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333', // Dark color for text
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Space between buttons
  },
  signInButton: {
    padding: '15px',
    backgroundColor: '#007bff', // Blue button color
    color: '#fff',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width: '100%', // Full width
  },
  existingUser: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '16px',
    color: '#333', // Text color for existing user section
  },
  loginLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default SignInPage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window?.solana?.isPhantom) {
        console.log('Phantom wallet found!');
        const response = await window.solana.connect({ onlyIfTrusted: true });
        console.log(
          'Connected with Public Key:',
          response.publicKey.toString()
        );
        setWalletAddress(response.publicKey.toString());
      } else {
        console.log('Phantom wallet not found!');
      }
    };

    window.addEventListener('load', checkIfWalletIsConnected);
    return () => window.removeEventListener('load', checkIfWalletIsConnected);
  }, []);

  const connectWallet = async () => {
    if (window.solana) {
      const response = await window.solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    } else {
      alert('Phantom wallet not found! Please install it.');
    }
  };

  const handleRecruiterSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in as recruiter...");
    // Implement recruiter sign-in logic here
  };

  const handleUserSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in as user...");
    // Implement user sign-in logic here
  };

  useEffect(() => {
    const particlesJS = window.particlesJS;
    if (particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false },
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
        },
        retina_detect: true,
      });
    }
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
          {!walletAddress && (
            <button onClick={connectWallet} style={styles.walletButton}>
              Connect Wallet
            </button>
          )}
          {walletAddress && (
            <p style={styles.walletAddress}>
              Connected: {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
            </p>
          )}
        </div>

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

const styles = {
  particlesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1',
  },
  formContainer: {
    width: '400px',
    margin: '100px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  formHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  signInButton: {
    padding: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  walletButton: {
    padding: '15px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  existingUser: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
  },
  loginLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  walletAddress: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#28a745',
    wordBreak: 'break-all',
  },
};

export default SignInPage;
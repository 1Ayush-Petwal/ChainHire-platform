import React from 'react';
import Navbar from './Navbar';
function Home() {
  return (

    <div style={{ backgroundColor: '#000', height: '90vh', margin: 0 }}>
      <iframe src='https://my.spline.design/landingpage-92cdb29215be53fff4088f4ac036b535/'
       frameborder='0' width='100%' height='100%' style={{
        marginTop:'5rem',
        marginBottom:'5rem',
        border: 'none',
        transform: 'scale(1.03, 1.2)',        // Apply the scaling factor

        transformOrigin: 'center',      // Center the scaling effect
      }}
      >
      </iframe>
      
    </div>
  );
}

export default Home;

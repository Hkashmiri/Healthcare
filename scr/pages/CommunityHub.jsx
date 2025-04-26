// pages/CommunityHub.jsx
import React from 'react';

function CommunityHub() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Join Our Community</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Connect with others passionate about brain health, computational modeling, and smart healthcare solutions.
      </p>

      <a 
        href="https://discord.gg/UmhDVdW8" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#5865F2', // Discord's purple
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          marginBottom: '2rem'
        }}
      >
        Join Our Discord
      </a>

      <main style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Community Connection</h2>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
          Foster social connections through community events, support groups, and forums. Explore ways to connect with others for enhanced well-being:
        </p>
    
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#444' }}>
          <li style={{ marginBottom: '0.5rem' }}>Participate in local community events and gatherings.</li>
          <li style={{ marginBottom: '0.5rem' }}>Join support groups or online forums to connect with people who share similar interests or experiences.</li>
          <li style={{ marginBottom: '0.5rem' }}>Volunteer for community service projects to give back and meet new people.</li>
          <li style={{ marginBottom: '0.5rem' }}>Attend workshops or classes to learn new skills and build connections.</li>
          <li style={{ marginBottom: '0.5rem' }}>Stay connected with friends and family through regular communication.</li>
        </ul>
      </main>
    </div>
  );
}

export default CommunityHub;

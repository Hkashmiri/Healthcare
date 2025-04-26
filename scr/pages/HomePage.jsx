// pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // <-- import it correctly here!

function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Hero Section */}
      <section style={{ marginBottom: '2rem' }}>
        <img 
          src={logo} // use the imported logo
          alt="Smart Healthcare Portal Logo" 
          style={{ width: '150px', marginBottom: '1rem' }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Empowering Minds with Smart Tools
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Bridging Neuroscience, Computational Modeling, and AI
        </p>
      </section>

      {/* Mission Statement */}
      <section style={{ marginBottom: '2rem', maxWidth: '800px', marginInline: 'auto' }}>
        <h2>Our Mission</h2>
        <p style={{ fontSize: '1rem', color: '#666', marginTop: '0.5rem' }}>
          At Smart Healthcare Portal, our mission is to integrate the latest advancements in neuroscience, computational modeling, 
          and artificial intelligence to create smarter tools that empower both patients and healthcare professionals.
        </p>
      </section>

      {/* Call to Action Buttons */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/educational" style={buttonStyle}>
          Explore Tools
        </Link>
        <Link to="/research-center" style={buttonStyle}>
          Learn More
        </Link>
        <Link to="/clinical" style={buttonStyle}>
          Start Assessment
        </Link>
      </section>
    </div>
  );
}

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#007bff',
  color: 'white',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem'
};

export default HomePage;

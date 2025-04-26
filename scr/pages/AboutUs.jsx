// pages/AboutUs.jsx
import React from 'react';

function AboutUs() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        At Smart Healthcare Portal, we are passionate about advancing the future of healthcare by combining neuroscience, computational modeling, and AI engineering. Our mission is to make brain-based, personalized healthcare accessible to everyone.
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🧠 Neuroscience Integration</h2>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Our assessments are grounded in real neuroscience principles, ensuring that each tool reflects actual brain function. 
          Whether it's cognitive performance, emotional responses, or neural activity patterns, we design our evaluations to map closely to the underlying brain systems.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🧮 Computational Modeling</h2>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          We leverage advanced data-driven models to simulate diagnoses, predict treatment outcomes, and guide therapeutic decisions. 
          Our simulations help visualize potential patient paths, offering both clinicians and users a powerful tool for planning personalized care strategies.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🤖 AI Engineering</h2>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Our smart systems learn from each user’s unique data to tailor healthcare solutions. 
          By integrating AI, we create adaptive, evolving tools that personalize assessments, recommendations, and treatments in real time.
        </p>
      </section>

      <section>
        <h2>🌟 Inspired by Representational Assessment Tools</h2>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          We draw inspiration from established representational assessment tools that map brain and behavioral data into meaningful frameworks. 
          Our work builds on these foundations, pushing forward with innovations that deepen accuracy and broaden accessibility.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;

// src/pages/HealthFactCalendar.jsx
import React, { useEffect, useState } from 'react';

function HealthFactCalendar() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const storedFacts = JSON.parse(localStorage.getItem('healthFactHistory')) || [];
    setFacts(storedFacts);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📅 Health Fact Calendar</h1>
      {facts.length === 0 ? (
        <p>No health facts saved yet!</p>
      ) : (
        <ul style={{ marginTop: '1rem' }}>
          {facts.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem', backgroundColor: '#e0f7fa', padding: '1rem', borderRadius: '8px' }}>
              <strong>{item.date}:</strong> {item.fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HealthFactCalendar;

// src/pages/HealthInsurance.jsx
import React, { useState } from 'react';

function HealthInsurance() {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    state: '',
    householdSize: '',
  });

  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = parseInt(formData.age);
    const income = parseFloat(formData.income);
    const householdSize = parseInt(formData.householdSize);
    const state = formData.state.toLowerCase();

    // Simple Recommendation Logic
    if (age < 19) {
      setRecommendation('You might qualify for CHIP (Children\'s Health Insurance Program).');
    } else if (income < 18000 && householdSize === 1) {
      setRecommendation('You might qualify for Medicaid based on your income.');
    } else if (income < 40000 && householdSize > 1) {
      setRecommendation('You might qualify for a subsidized Marketplace plan.');
    } else if (income > 100000) {
      setRecommendation('You may want to explore private insurance plans.');
    } else {
      setRecommendation('You likely qualify for Marketplace health insurance with possible savings.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🩺 Health Insurance Finder</h1>
      <p>Fill out the form below to find out which type of health insurance may be right for you.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <div>
          <label>Age:</label><br />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>Annual Income ($):</label><br />
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>State:</label><br />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label>Household Size:</label><br />
          <input
            type="number"
            name="householdSize"
            value={formData.householdSize}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '8px', marginTop: '1rem' }}>
          Find My Insurance
        </button>
      </form>

      {recommendation && (
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e0ffe0', borderRadius: '8px' }}>
          <h2>Recommended for you:</h2>
          <p>{recommendation}</p>
          <p><a href="https://www.healthcare.gov" target="_blank" rel="noopener noreferrer">Learn more on HealthCare.gov</a></p>
        </div>
      )}
    </div>
  );
}

export default HealthInsurance;

// pages/Activities.jsx
import React, { useState } from 'react';

function Activities() {
  const [formData, setFormData] = useState({
    fitnessLevel: '',
    goal: '',
    availableDays: '',
  });

  const [schedule, setSchedule] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateSchedule();
  };

  const generateSchedule = () => {
    const { fitnessLevel, goal, availableDays } = formData;

    let activities = [];

    if (goal === 'Weight Loss') {
      activities = ['Cardio', 'HIIT', 'Light Strength Training'];
    } else if (goal === 'Muscle Gain') {
      activities = ['Strength Training', 'Weight Lifting', 'Core Workouts'];
    } else if (goal === 'Flexibility') {
      activities = ['Yoga', 'Pilates', 'Stretching Sessions'];
    } else {
      activities = ['General Fitness (Mix of Cardio and Strength)'];
    }

    const days = parseInt(availableDays) || 3;

    const generatedSchedule = Array.from({ length: days }, (_, index) => ({
      day: `Day ${index + 1}`,
      activity: activities[index % activities.length],
    }));

    setSchedule(generatedSchedule);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '1rem' }}>Create Your Activity Schedule</h1>

      {/* Tips Section */}
      <main style={{ marginBottom: '2rem' }}>
        <h2>Stay Active</h2>
        <p>Discover fitness tips for all levels and age groups to promote a healthy lifestyle. Follow these guidelines for staying active:</p>

        <ul style={{ textAlign: 'left', marginTop: '1rem' }}>
          <li>Engage in at least 150 minutes of moderate-intensity aerobic activity per week.</li>
          <li>Include strength training exercises at least two days a week.</li>
          <li>Find activities you enjoy, such as walking, cycling, swimming, or dancing.</li>
          <li>Stay consistent with your exercise routine to experience long-term benefits.</li>
          <li>Consider incorporating flexibility and balance exercises for overall fitness.</li>
        </ul>
      </main>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Fitness Level:
          <select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label>
          Fitness Goal:
          <select name="goal" value={formData.goal} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Flexibility">Flexibility</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </label>

        <label>
          Available Days Per Week:
          <input 
            type="number" 
            name="availableDays" 
            value={formData.availableDays} 
            onChange={handleChange}
            min="1"
            max="7"
            required
          />
        </label>

        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#28a745', color: 'white', borderRadius: '8px', fontWeight: 'bold' }}>
          Generate Schedule
        </button>
      </form>

      {/* AI-Generated Schedule */}
      {schedule && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Your AI-Generated Schedule:</h2>
          <ul style={{ marginTop: '1rem' }}>
            {schedule.map((item, index) => (
              <li key={index}>
                <strong>{item.day}:</strong> {item.activity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Activities;

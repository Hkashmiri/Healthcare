// src/pages/HealthFact.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HealthFact() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // "2025-04-26"
    const savedFact = JSON.parse(localStorage.getItem('healthFact'));

    if (savedFact && savedFact.date === today) {
      setFact(savedFact.fact);
      setLoading(false);
    } else {
      fetchFact(today);
    }
  }, []);

  const fetchFact = async (today) => {
    try {
      const response = await axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=healthy', {
        headers: {
          'x-app-id': '0d456d7b',
          'x-app-key': 'ce06e51f87d32db4b165c509d3c6c93e',
        },
      });

      const branded = response.data.branded;
      if (branded && branded.length > 0) {
        const randomItem = branded[Math.floor(Math.random() * branded.length)];
        const newFact = `Did you know? ${randomItem.brand_name} has a food item called "${randomItem.food_name}" with ${randomItem.nf_calories} calories!`;

        setFact(newFact);
        localStorage.setItem('healthFact', JSON.stringify({ date: today, fact: newFact }));

        // 🆕 Save to history
        const history = JSON.parse(localStorage.getItem('healthFactHistory')) || [];
        history.push({ date: today, fact: newFact });
        localStorage.setItem('healthFactHistory', JSON.stringify(history));

      } else {
        setFact('Eat healthy and stay active! 🥦🏃‍♂️');
      }
    } catch (error) {
      console.error('Error fetching health fact:', error);
      setFact('Unable to load health fact. Stay tuned!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🧠 Health Fact of the Day</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
          <p>{fact}</p>
        </div>
      )}
    </div>
  );
}

export default HealthFact;

// EatingWell.jsx
import React, { useState } from 'react';
import axios from 'axios';

function EatingWell() {
  const [foodPreference, setFoodPreference] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
        params: {
          api_key: 'QfephsSvsm4xB1yFFq8ahR85j7aGfAV32rJV3FAy',
          query: foodPreference,
          pageSize: 5,
        }
      });

      setRecommendations(response.data.foods);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Eating Well</h1>
      <p>Get a personalized eating plan based on your preferences and calorie goals.</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Enter food preference (e.g., chicken, broccoli)"
          value={foodPreference}
          onChange={(e) => setFoodPreference(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
          required
        />
        <input
          type="number"
          placeholder="Enter calorie goal"
          value={calorieGoal}
          onChange={(e) => setCalorieGoal(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
          required
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Get Plan</button>
      </form>

      {recommendations.length > 0 && (
        <div>
          <h2>Recommended Foods</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {recommendations.map((food) => (
              <li key={food.fdcId} style={{ marginBottom: '1rem' }}>
                <strong>{food.description}</strong><br/>
                Calories per 100g: {food.foodNutrients.find(n => n.nutrientName === 'Energy')?.value || 'N/A'} kcal
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EatingWell;
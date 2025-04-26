import { useState } from 'react';

function ClinicalPortal() {
  const [formData, setFormData] = useState({
    heightValue: '',
    heightUnit: 'cm',
    heightFeet: '',
    heightInches: '',
    weightValue: '',
    weightUnit: 'kg',
    sleepHours: ''
  });

  const [analysisResult, setAnalysisResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const convertHeightToCm = () => {
    if (formData.heightUnit === 'cm') {
      return parseFloat(formData.heightValue);
    } else {
      const feet = parseFloat(formData.heightFeet) || 0;
      const inches = parseFloat(formData.heightInches) || 0;
      return feet * 30.48 + inches * 2.54;
    }
  };

  const convertWeightToKg = () => {
    const weight = parseFloat(formData.weightValue);
    return formData.weightUnit === 'kg' ? weight : weight * 0.453592;
  };

  const runAIAnalysis = () => {
    const h = convertHeightToCm();
    const w = convertWeightToKg();
    const s = parseFloat(formData.sleepHours);

    const heightInMeters = h / 100;
    const bmi = (w / (heightInMeters * heightInMeters)).toFixed(1);

    let score = 100;
    if (bmi > 25) score -= 15;
    if (bmi < 18.5) score -= 10;
    if (s < 6) score -= 20;
    else if (s > 9) score -= 5;

    const result = {
      bmi,
      wellnessScore: Math.max(0, score),
      healthGroup:
        score > 85
          ? 'Optimal Health'
          : score > 60
          ? 'Moderate Wellness'
          : 'Needs Attention',
      flags: [
        ...(bmi > 25 ? ['High BMI'] : []),
        ...(bmi < 18.5 ? ['Low BMI'] : []),
        ...(s < 6 ? ['Sleep deprivation'] : []),
        ...(s > 9 ? ['Excessive sleep'] : [])
      ],
      recommendation:
        score < 60
          ? 'Encourage lifestyle changes and consider wellness consultation.'
          : 'Maintain current habits and monitor regularly.'
    };

    setAnalysisResult(result);
  };

  return (
    <div>
      <h2>🔐 Clinical Portal</h2>
      <p>Input physical metrics for AI-powered health analysis:</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          runAIAnalysis();
        }}
        style={{ display: 'grid', gap: '1rem', maxWidth: '400px', marginTop: '1rem' }}
      >
        {/* Height input */}
        <label>
          Height:
          <select name="heightUnit" value={formData.heightUnit} onChange={handleChange}>
            <option value="cm">cm</option>
            <option value="ft">ft/in</option>
          </select>
        </label>
        {formData.heightUnit === 'cm' ? (
          <input
            type="number"
            name="heightValue"
            placeholder="Height in cm"
            value={formData.heightValue}
            onChange={handleChange}
            required
          />
        ) : (
          <>
            <input
              type="number"
              name="heightFeet"
              placeholder="Feet"
              value={formData.heightFeet}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="heightInches"
              placeholder="Inches"
              value={formData.heightInches}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Weight input */}
        <label>
          Weight:
          <select name="weightUnit" value={formData.weightUnit} onChange={handleChange}>
            <option value="kg">kg</option>
            <option value="lb">lbs</option>
          </select>
        </label>
        <input
          type="number"
          name="weightValue"
          placeholder={`Weight in ${formData.weightUnit}`}
          value={formData.weightValue}
          onChange={handleChange}
          required
        />

        {/* Sleep input */}
        <input
          type="number"
          name="sleepHours"
          placeholder="Hours of Sleep"
          value={formData.sleepHours}
          onChange={handleChange}
          required
        />

        <button type="submit" style={{ padding: '10px' }}>
          🧠 Run AI Health Analysis
        </button>
      </form>

      {analysisResult && (
        <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>🧬 AI Health Analysis Results</h3>
          <p><strong>BMI:</strong> {analysisResult.bmi}</p>
          <p><strong>Wellness Score:</strong> {analysisResult.wellnessScore} / 100</p>
          <p><strong>Health Group:</strong> {analysisResult.healthGroup}</p>
          <p><strong>Flags Detected:</strong></p>
          <ul>
            {analysisResult.flags.length > 0 ? (
              analysisResult.flags.map((flag, idx) => <li key={idx}>⚠️ {flag}</li>)
            ) : (
              <li>✅ No anomalies detected</li>
            )}
          </ul>
          <p><strong>AI Recommendation:</strong> {analysisResult.recommendation}</p>
        </div>
      )}
    </div>
  );
}

export default ClinicalPortal;

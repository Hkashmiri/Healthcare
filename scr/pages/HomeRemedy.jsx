// src/pages/HomeRemedy.jsx
import { useState } from 'react';

function HomeRemedy() {
  const [symptom, setSymptom] = useState('');
  const [remedy, setRemedy] = useState('');

  const remedyData = {
    headache: [
      'Drink plenty of water, rest in a quiet, dark room, and apply a cold compress to your forehead.',
      'Apply a cold or warm compress to the forehead.',
      'Massage peppermint oil on temples.'
    ],
    cough: [
      'Try warm tea with honey, steam inhalation, and ginger or turmeric milk.',
      'Drink warm lemon and honey water.',
      'Use honey and ginger in tea.'
    ],
    stomachache: [
      'Ginger tea, peppermint, or a warm compress on your abdomen may help relieve the discomfort.',
      'Drink chamomile tea.',
      'Consume plain yogurt.'
    ],
    soreThroat: [
      'Gargle with warm salt water, stay hydrated, and drink herbal teas with honey.',
      'Drink honey and warm water.',
      'Use throat lozenges.'
    ],
    nausea: [
      'Try ginger or peppermint tea, and avoid greasy or spicy foods.',
      'Sip on ginger or peppermint tea.',
      'Eat small, bland meals.',
      'Inhale the scent of a sliced lemon.'
    ],
    insomnia: [
      'Use lavender oil, limit screen time before bed, and maintain a regular sleep schedule.',
      'Drink warm milk before bedtime.',
      'Create a bedtime routine.'
    ],
    commonCold: [
      'Inhale steam with eucalyptus oil.',
      'Drink ginger tea.',
      'Consume vitamin C-rich foods.'
    ],
    indigestion: [
      'Chew fennel seeds after meals.',
      'Drink ginger tea before meals.',
      'Take probiotics.'
    ],
    upsetStomach: [
      'Drink chamomile tea.',
      'Consume plain yogurt.',
      'Avoid spicy and fatty foods.'
    ],
    acne: [
      'Apply a honey and cinnamon mask.',
      'Use tea tree oil as a spot treatment.'
    ],
    sunburn: [
      'Apply aloe vera gel.',
      'Take a cool bath with baking soda.'
    ],
    constipation: [
      'Increase fiber intake.',
      'Drink prune juice.'
    ],
    drySkin: [
      'Apply coconut oil.',
      'Take shorter, lukewarm showers.'
    ],
    dandruff: [
      'Rinse hair with apple cider vinegar.',
      'Use aloe vera gel on the scalp.'
    ],
    earache: [
      'Apply a warm compress.',
      'Use over-the-counter ear drops.'
    ],
    jointPain: [
      'Apply hot or cold packs.',
      'Exercise regularly.'
    ],
    allergies: [
      'Use a saline nasal rinse.',
      'Consume local honey.'
    ],
    toothache: [
      'Rinse with warm salt water.',
      'Apply a cold compress to the cheek.'
    ],
    badBreath: [
      'Chew parsley or mint leaves.',
      'Use a tongue scraper.'
    ],
    highBloodPressure: [
      'Exercise regularly.',
      'Reduce sodium intake.'
    ],
    anxiety: [
      'Practice deep breathing exercises.',
      'Drink chamomile tea.'
    ],
    burns: [
      'Run cool water over the affected area.',
      'Apply aloe vera gel.'
    ],
    bruises: [
      'Use a cold compress.',
      'Apply arnica cream.'
    ],
    hiccups: [
      'Hold your breath for a few seconds.',
      'Drink a glass of cold water quickly.'
    ],
    insectBites: [
      'Apply a paste of baking soda and water.',
      'Use a cold compress.'
    ],
    motionSickness: [
      'Chew on ginger candies.',
      'Take deep breaths.'
    ],
    dryEyes: [
      'Use warm compresses on closed eyes.',
      'Blink frequently.'
    ],
    stye: [
      'Apply a warm tea bag to the affected eye.',
      'Keep the eye clean.'
    ],
    rashes: [
      'Apply calamine lotion.',
      'Take an oatmeal bath.'
    ],
    fatigue: [
      'Stay hydrated.',
      'Take short power naps.'
    ],
    hangover: [
      'Drink plenty of water.',
      'Consume electrolyte-rich drinks.'
    ],
    stress: [
      'Practice meditation.',
      'Engage in relaxing activities.'
    ],
    dryCough: [
      'Sip on warm water with honey.',
      'Use a humidifier.'
    ],
    stomachFlu: [
      'Drink clear fluids.',
      'Eat the BRAT diet (Bananas, Rice, Applesauce, Toast).'
    ],
    athleteFoot: [
      'Soak feet in diluted vinegar.',
      'Keep feet dry.'
    ],
    nosebleed: [
      'Pinch the nostrils together.',
      'Lean forward and breathe through the mouth.'
    ],
    anemia: [
      'Increase iron-rich foods in the diet.',
      'Consider iron supplements.'
    ],
    memoryImprovement: [
      'Eat omega-3 fatty acids.',
      'Exercise regularly.'
    ],
    dryChappedLips: [
      'Apply coconut oil or lip balm.',
      'Stay hydrated.'
    ],
    laryngitis: [
      'Rest the voice.',
      'Drink warm herbal teas.'
    ],
    cankerSores: [
      'Rinse with saltwater.',
      'Apply aloe vera gel.'
    ],
    gout: [
      'Stay hydrated.',
      'Avoid high-purine foods.'
    ],
    warts: [
      'Apply duct tape over the wart.',
      'Use over-the-counter wart removal products.'
    ],
    fever: [
      'Stay hydrated.',
      'Take a lukewarm bath.'
    ],
    nailFungus: [
      'Soak nails in diluted vinegar.',
      'Keep nails clean and dry.'
    ],
    beeStings: [
      'Remove the stinger.',
      'Apply a cold compress.'
    ],
    vertigo: [
      'Stay hydrated.',
      'Perform head exercises.'
    ],
    hayFever: [
      'Use a saline nasal rinse.',
      'Keep windows closed during high pollen seasons.'
    ],
    splinterRemoval: [
      'Soak the area in warm water.',
      'Use tweezers to gently remove the splinter.'
    ],
    dullSkin: [
      'Exfoliate with a sugar scrub.',
      'Stay hydrated.'
    ],
    dehydration: [
      'Drink water regularly.',
      'Consume hydrating fruits and vegetables.'
    ],
    dryHair: [
      'Apply a coconut oil hair mask.',
      'Rinse hair with apple cider vinegar.'
    ],
    toenailFungus: [
      'Soak feet in tea tree oil solution.',
      'Keep toenails clean and trimmed.'
    ],
    stomachGas: [
      'Drink peppermint tea.',
      'Avoid carbonated beverages.'
    ],
    crackedHeels: [
      'Soak feet in warm water.',
      'Apply a thick moisturizer.'
    ],
    shinSplints: [
      'Rest and ice the affected area.',
      'Stretch the calf muscles.'
    ],
    menstrualCramps: [
      'Apply a hot water bottle to the lower abdomen.',
      'Drink chamomile tea.'
    ],
    dryItchyScalp: [
      'Apply aloe vera gel.',
      'Rinse with cold water after shampooing.'
    ],
    chestCongestion: [
      'Inhale steam with eucalyptus oil.',
      'Drink hot herbal teas.'
    ],
    earWaxRemoval: [
      'Use warmed olive oil drops.',
      'Perform the Valsalva maneuver.'
    ],
    footOdor: [
      'Soak feet in black tea.',
      'Use antibacterial foot powder.'
    ],
    jockItch: [
      'Apply antifungal cream.',
      'Keep the affected area dry.'
    ],
    calluses: [
      'Soak feet in warm water.',
      'Use a pumice stone.'
    ],
    puffyEyes: [
      'Apply cold cucumber slices.',
      'Get enough sleep.'
    ],
    dryMouth: [
      'Chew sugar-free gum.',
      'Stay hydrated.'
    ],
    foodPoisoning: [
      'Stay hydrated with clear fluids.',
      'Rest and avoid solid foods.'
    ],
    blackheads: [
      'Use a clay mask.',
      'Exfoliate regularly.'
    ],
    kneePain: [
      'Apply a cold or warm compress.',
      'Perform gentle knee exercises.'
    ],
    chappedHands: [
      'Apply a thick hand cream.',
      'Wear gloves in cold weather.'
    ],
    shinglesPain: [
      'Apply a cool compress.',
      'Take pain-relief medication as recommended.'
    ]
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedSymptom = symptom.toLowerCase().replace(/\s+/g, '');
    const result = remedyData[cleanedSymptom];
    setRemedy(result || "I'm sorry, I don't have a home remedy for that symptom yet. Please consult a healthcare professional.");
  };

  return (
    <div>
      <h2>🏡 Home Remedy Finder</h2>
      <p>Enter a symptom to receive a natural home remedy suggestion from our AI assistant.</p>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="e.g. headache, cough, sore throat"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
        />
        <button type="submit">Find Remedy</button>
      </form>

      {remedy && (
        <div>
          <h4>Suggested Remedy:</h4>
          <p>{remedy}</p>
        </div>
      )}
    </div>
  );
}

export default HomeRemedy;


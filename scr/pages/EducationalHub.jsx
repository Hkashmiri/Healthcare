import { useState } from 'react';

function EducationalHub() {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (topic) => {
    setExpandedTopic(expandedTopic === topic ? null : topic);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2>📚 Educational Hub</h2>
      <p>
        Welcome to the Educational Hub! Learn how AI, neuroscience, and computational modeling are reshaping modern healthcare.
      </p>

      <hr />

      {/* AI in Healthcare */}
      <section>
        <h3 onClick={() => toggleTopic('ai')} style={{ cursor: 'pointer' }}>
          🤖 AI in Healthcare
        </h3>
        {expandedTopic === 'ai' && (
          <ul>
            <li><a href="https://pubmed.ncbi.nlm.nih.gov/?term=AI+in+Healthcare" target="_blank">PubMed: AI in Medicine</a></li>
            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8184221/" target="_blank">Overview: Deep Learning for Diagnostics</a></li>
            <li><a href="https://www.who.int/publications/i/item/9789240029200" target="_blank">WHO Guidance on Ethics & AI in Healthcare</a></li>
            <li><a href="https://www.youtube.com/watch?v=Q69a4S8b3vM" target="_blank">🎥 Video: AI Doctor - What’s Possible?</a></li>
          </ul>
        )}
      </section>

      <hr />

      {/* Neuroscience */}
      <section>
        <h3 onClick={() => toggleTopic('neuro')} style={{ cursor: 'pointer' }}>
          🧠 Neuroscience & Brain Tools
        </h3>
        {expandedTopic === 'neuro' && (
          <ul>
            <li><a href="https://www.humanbrainproject.eu/en/" target="_blank">Human Brain Project</a></li>
            <li><a href="https://braininitiative.nih.gov/" target="_blank">NIH BRAIN Initiative</a></li>
            <li><a href="https://openneuro.org/" target="_blank">OpenNeuro: Datasets for Brain Research</a></li>
            <li><a href="https://www.youtube.com/watch?v=er76Y2sAb3g" target="_blank">🎥 Neural Decoding Explained</a></li>
          </ul>
        )}
      </section>

      <hr />

      {/* Computational Modeling */}
      <section>
        <h3 onClick={() => toggleTopic('modeling')} style={{ cursor: 'pointer' }}>
          🧬 Computational Modeling
        </h3>
        {expandedTopic === 'modeling' && (
          <ul>
            <li><a href="https://modeldb.science/ModelDB" target="_blank">ModelDB: Computational Models of Neurons</a></li>
            <li><a href="https://simtk.org/" target="_blank">SimTK: Simulation Tools for Biology</a></li>
            <li><a href="https://github.com/OpenSourceBrain" target="_blank">Open Source Brain</a></li>
            <li><a href="https://www.youtube.com/watch?v=OVlI88AUZn8" target="_blank">🎥 What is Computational Modeling?</a></li>
          </ul>
        )}
      </section>

      <hr />

      {/* General Health Links */}
  <section>
    <h3 onClick={() => toggleTopic('general')} style={{ cursor: 'pointer' }}>
      🌿 General Health & Wellness
    </h3>
    {expandedTopic === 'general' && (
      <ul>
        <li><a href="https://www.samhsa.gov/mental-health">Mental Illnesses</a></li>
        <li><a href="https://www.mycprcertificationonline.com/blog/seven-basic-life-saving-skills-that-everyone-should-know">Life Saving Tips</a></li>
        <li><a href="https://www.nutrition.gov/topics/shopping-cooking-and-meal-planning/recipe-collection">Healthy Recipes</a></li>
        <li><a href="https://www.cdc.gov/physicalactivity/basics/adults/index.htm">Health Fitness</a></li>
        <li><a href="https://www.ucsfhealth.org/education/healthy-snack-ideas">Healthy Snacks</a></li>
        <li><a href="https://www.cdc.gov/nccdphp/dnpao/features/healthy-eating-tips/index.html">Dieting Tips</a></li>
        <li><a href="https://www.cdc.gov/chronicdisease/resources/publications/factsheets/cancer.htm">Cancer Facts</a></li>
        <li><a href="https://www.cdc.gov/heartdisease/index.htm">Common Heart Problems</a></li>
        <li><a href="https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-pregnant-women">Pregnancy Tips</a></li>
        <li><a href="https://www.cdc.gov/std/prevention/default.htm">STDs</a></li>
        <li><a href="https://www.cdc.gov/diabetes/library/4steps.html">Diabetes</a></li>
        <li><a href="https://www.nhlbi.nih.gov/health/lungs/lung-health">Lung Problems</a></li>
        <li><a href="https://www.cdc.gov/">Contagious Illnesses</a></li>
        <li><a href="https://www.betterhealth.vic.gov.au/health/healthyliving/Vitamins-and-minerals">Vitamins</a></li>
        <li><a href="https://alzheimer.ca/en/about-dementia/how-can-i-reduce-risk-dementia/brain-healthy-tips-reduce-your-risk-dementia">Alzheimer's</a></li>
        <li><a href="https://www.cdc.gov/ncbddd/sicklecell/index.html">Sickle Cell Anemia</a></li>
        <li><a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know">Meditation & Mindfulness</a></li>
        <li><a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/polycystic-ovary-syndrome-pcos">PCOS</a></li>
        <li><a href="https://www.samhsa.gov/mental-health">Mental Illnesses</a></li>
        <li><a href="https://www.cdc.gov/nccdphp/dnpao/features/healthy-eating-tips/index.html">Dieting Tips</a></li>
        <li><a href="https://www.cdc.gov/chronicdisease/resources/publications/factsheets/cancer.htm">Cancer Facts</a></li>
        <li><a href="https://www.betterhealth.vic.gov.au/health/healthyliving/Vitamins-and-minerals">Vitamins</a></li>
        <li><a href="https://alzheimer.ca/en/about-dementia/how-can-i-reduce-risk-dementia/brain-healthy-tips-reduce-your-risk-dementia">Alzheimer's</a></li>
        <li><a href="https://www.cdc.gov/ncbddd/sicklecell/index.html#:~:text=Sickle%20cell%20disease%20(SCD)%20is,activities%20that%20other%20people%20do">Sickle Cell Anemia</a></li>
        <li> <a href="https://www.nccih.nih.gov/health/meditation-and-mindfulness-what-you-need-to-know">Medication Side Effects</a></li>
        <li><a href="https://www.nhs.uk/conditions/miscarriage/">Miscarriages</a></li>
        <li><a href="https://www.cdc.gov/malaria/about/faqs.html#:~:text=Symptoms%20and%20Diagnosis,-What%20are%20the&text=Symptoms%20of%20malaria%20include%20fever,loss%20of%20red%20blood%20cells">Malaria</a></li>
        <li><a href="https://www.cdc.gov/meningitis/index.html#:~:text=Meningitis%20is%20an%20inflammation%20(swelling,infections%20also%20can%20cause%20meningitis">Meningitis</a></li>
        <li><a href="https://nationaleczema.org/eczema/">Eczema</a></li>
        <li><a href="https://my.clevelandclinic.org/health/treatments/23999-plastic-and-reconstructive-surgery">Cosmetic Surgeries</a></li>
        <li><a href="https://www.healthdirect.gov.au/nerve-pain">Nerve Pain</a></li>
        <li><a href="https://www.who.int/news-room/fact-sheets/detail/hypertension">High Blood Pressure</a></li>
      </ul>
    )}
  </section>

  <hr />

      <p style={{ fontStyle: 'italic' }}>
        Click a topic to explore related research papers, tools, datasets, and videos.
      </p>
    </div>
  );
}

export default EducationalHub;

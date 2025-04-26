// App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import EducationalHub from './pages/EducationalHub';
import ClinicalPortal from './pages/ClinicalPortal';
import HomeRemedy from './pages/HomeRemedy';
import ResearchCenter from './pages/ResearchCenter';
import CommunityHub from './pages/CommunityHub';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import EatingWell from './pages/EatingWell';
import HealthInsurance from './pages/HealthInsurance'; 
import HealthFact from './pages/HealthFact';
import HealthFactCalendar from './pages/HealthFactCalendar'; 


function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/educational">Educational Hub</Link>
        <Link to="/clinical">Clinical Portal</Link>
        <Link to="/home-remedy">Home Remedy</Link>
        <Link to="/research-center">Research Center</Link>
        <Link to="/community">Community Hub</Link>
        <Link to="/about">About Us</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/eating-well">Eating Well</Link>
        <Link to="/health-insurance">Health Insurance</Link> 
        <Link to="/health-fact">Health Fact</Link>
        <Link to="/health-fact-calendar">Fact Calendar</Link> 

      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/educational" element={<EducationalHub />} />
        <Route path="/clinical" element={<ClinicalPortal />} />
        <Route path="/home-remedy" element={<HomeRemedy />} />
        <Route path="/research-center" element={<ResearchCenter />} />
        <Route path="/community" element={<CommunityHub />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/eating-well" element={<EatingWell />} />
        <Route path="/health-insurance" element={<HealthInsurance />} /> 
        <Route path="/health-fact" element={<HealthFact />} />
        <Route path="/health-fact-calendar" element={<HealthFactCalendar />} /> 

      </Routes>
    </div>
  );
}

export default App;

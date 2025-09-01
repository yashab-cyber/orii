import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ResearchLabs from './pages/ResearchLabs';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import JoinUs from './pages/JoinUs';
import SupportUs from './pages/SupportUs';
import Contact from './pages/Contact';
import CybersecurityLab from './pages/labs/CybersecurityLab';
import HardwareLab from './pages/labs/HardwareLab';
import BioTechLab from './pages/labs/BioTechLab';
import EnergyLab from './pages/labs/EnergyLab';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research-labs" element={<ResearchLabs />} />
            <Route path="/research-labs/cybersecurity" element={<CybersecurityLab />} />
            <Route path="/research-labs/hardware" element={<HardwareLab />} />
            <Route path="/research-labs/biotech" element={<BioTechLab />} />
            <Route path="/research-labs/energy" element={<EnergyLab />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

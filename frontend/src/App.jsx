import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './pages/dashboard/Layout';
import DashHome from './pages/dashboard/Home';
import DashProjects from './pages/dashboard/Projects';
import DashUpdates from './pages/dashboard/Updates';
import DashCertificates from './pages/dashboard/Certificates';
import DashProfile from './pages/dashboard/Profile';
import DashAdmin from './pages/dashboard/Admin';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ResearchLabs from './pages/ResearchLabs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import JoinUs from './pages/JoinUs';
import SupportUs from './pages/SupportUs';
import Contact from './pages/Contact';
import Verify from './pages/Verify';
import VerifyCertificate from './pages/VerifyCertificate';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
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
      <div className="relative min-h-screen text-gray-900 dark:text-gray-100">
        {/* Background */}
        <AnimatedBackground />
        {/* Foreground content */}
        <div className="relative z-10">
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
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/verify/:id" element={<VerifyCertificate />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route index element={<DashHome />} />
              <Route path="projects" element={<DashProjects />} />
              <Route path="updates" element={<DashUpdates />} />
              <Route path="certificates" element={<DashCertificates />} />
              <Route path="profile" element={<DashProfile />} />
              <Route path="admin" element={<DashAdmin />} />
            </Route>
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

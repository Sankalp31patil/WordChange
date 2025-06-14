import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router for navigation
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Home from './Components/Home';
import AlertCom from './Components/AlertCom';

export default function App() {
  // State to manage current theme mode (light or dark)
  const [mode, setMode] = React.useState('light');

  // State to manage alert visibility and message
  const [showAlert, setAlert] = React.useState(false);
  const [alertText, setAlertText] = React.useState();

  // Toggle between light and dark mode
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Change background
      Alert("DarkMode disabled"); // Show alert
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      Alert("DarkMode Enabled");
    }
  };

  // Function to show temporary alert messages
  const Alert = (text) => {
    setAlertText(text);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1500); // Hide alert after 1.5s
  };

  return (
    <Router>
      <div>
        {/* Navbar gets alert text, visibility, theme mode, and toggle function */}
        <Navbar
          alertText={alertText}
          showAlert={showAlert}
          mode={mode}
          toggleMode={toggleMode}
          objects={{ title: 'TextModify', about: 'About us' }}
        />

        {/* Alert component shown conditionally */}
        <AlertCom showAlert={showAlert} title={alertText} mode={mode} />

        {/* Main content area with page routes */}
        <div className="container md-3 mt-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/"
              element={<TextForm Alert={Alert} mode={mode} label="Write Text Below" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

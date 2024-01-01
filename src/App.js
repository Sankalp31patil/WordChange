import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Home from './Components/Home';
import AlertCom from './Components/AlertCom';

export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showAlert, setAlert] = React.useState(false);
  const [alertText, setAlertText] = React.useState();

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      Alert("DarkMode disabled")
    } 
    
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      Alert("DarkMode Enabled")
    }
  };

  const Alert = (text) => {
    setAlertText(text);
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 1500);
  };

  return (
    <Router>
      <div>
        <Navbar alertText={alertText} showAlert={showAlert} mode={mode} toggleMode={toggleMode} objects={{ title: 'TextModify', about: 'About us' }} />
        {<AlertCom showAlert = {showAlert} title={alertText} mode = {mode} />}
        <div className="container md-3 mt-3">
          <Routes>
            <Route path="/about" element = <About />/>
            <Route path="/home" element = <Home /> />
            <Route path="/" element = <TextForm Alert={Alert} mode={mode} label="Write Text Below"  /> />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

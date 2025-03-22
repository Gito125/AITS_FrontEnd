import React from 'react';
import Header from './components/common/Header';
import SideBar from './components/common/SideBar';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import NotificationsPage from './pages/NotificationsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import IssueForm from './components/issues/IssueForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };


  return ( 
    <Router>
      <Header />
      <main className='flex space-between bg-blue-100'>
        <SideBar darkMode={darkMode}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage darkMode={darkMode} toggleTheme={toggleTheme}/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-issue" element={<IssueForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


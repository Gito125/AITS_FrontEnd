import ReportsPage from "./pages/ReportsPage";
import Header from "./components/common/Header";
import SideBar from "./components/common/SideBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotificationsPage from "./pages/NotificationsPage";
import HelpPage from "./pages/HelpPage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <Router>
      <Header />

      <main className="flex space-between">
        {/* <SideBar /> */}

        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="/reports" element={<ReportsPage />} />
          <Route path='/notifications' element={<NotificationsPage /> } />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />

        </Routes>

      </main>
    </Router>
  );
}

export default App;

// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Import custom Landing_Page component
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/SignUp';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
import SelfCheckup from './Components/SelfCheckup/SelfCheckup';
import HealthTips from './Components/HealthTips/HealthTips';
import BestServices from './Components/BestServices/BestServices';
// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <Notification>

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/booking-consultation" element={<BookingConsultation />} />
            <Route path="/review-form" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/reports" element={<ReportsLayout />} />
            <Route path="/self-checkup" element={<SelfCheckup />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/best-services" element={<BestServices />} />
          </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
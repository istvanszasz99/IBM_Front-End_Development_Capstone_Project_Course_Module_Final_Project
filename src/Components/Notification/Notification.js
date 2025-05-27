// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // Make sure to create and style this CSS file

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [appointmentCancelled, setAppointmentCancelled] = useState(false);

  // --- SAMPLE DATA FOR TESTING ---
  useEffect(() => {
    // Comment out the next block if you want to use real storage data
    const sampleDoctor = { name: "Dr. John Doe", speciality: "Dentist" };
    const sampleAppointment = {
      name: "Test Patient",
      phoneNumber: "1234567890",
      date: "2025-06-01",
      time: "10:00 AM"
    };
    setIsLoggedIn(true);
    setUsername("testuser@example.com");
    setDoctorData(sampleDoctor);
    setAppointmentData(sampleAppointment);
    setShowNotification(true);
    // --- END SAMPLE DATA ---

    // // Uncomment for real data
    // const storedUsername = sessionStorage.getItem('email');
    // const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    // const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    // if (storedUsername) {
    //   setIsLoggedIn(true);
    //   setUsername(storedUsername);
    // }
    // if (storedDoctorData) {
    //   setDoctorData(storedDoctorData);
    // }
    // if (storedAppointmentData) {
    //   setAppointmentData(storedAppointmentData);
    //   setShowNotification(true);
    // }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Listen for appointment cancellation and hide notification
  useEffect(() => {
    if (appointmentCancelled) {
      setShowNotification(false);
    }
  }, [appointmentCancelled]);

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="notification-container">
          <div className="notification-content">
            <h3 className="notification-title">Appointment Details</h3>
            <p>
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
            <p>
              <strong>Speciality:</strong> {doctorData?.speciality}
            </p>
            <p>
              <strong>Name:</strong> {appointmentData.name}
            </p>
            <p>
              <strong>Phone Number:</strong> {appointmentData.phoneNumber}
            </p>
            <p>
              <strong>Date of Appointment:</strong> {appointmentData.date}
            </p>
            <p>
              <strong>Time slot:</strong> {appointmentData.time || appointmentData.selectedSlot}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;
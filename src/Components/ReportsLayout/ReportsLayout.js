import React, { useEffect, useState, useRef } from 'react';
import './ReportsLayout.css';
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import GiveReviews from '../GiveReviews/GiveReviews';

const ReportsLayout = ({ children }) => {
  const ref = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState([]);
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    }

    const storedUsername = sessionStorage.getItem('email');
    let storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));

    // --- Add 2 sample doctors if no data in localStorage ---
    if (!storedDoctorData) {
      storedDoctorData = [
        { id: 1, name: "Dr. John Doe", speciality: "Dentist" },
        { id: 2, name: "Dr. Jane Smith", speciality: "Dermatologist" }
      ];
    } else {
      let i = 1;
      storedDoctorData.forEach(element => { element.id = i++; });
    }
    setDoctorData(storedDoctorData);
    // --- End sample doctors ---

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedUsername && storedDoctorData) {
      setIsShowReviewForm(true);
    }
  }, [navigate]);

  const handleFormSubmit = (submittedMessage) => {
    const updatedDoctorData = doctorData.map(doctor => {
      if (doctor.id === submittedMessage.doctor.id) {
        doctor.review = submittedMessage.review;
        doctor.rating = submittedMessage.rating;
      }
      return doctor;
    });
    setDoctorData(updatedDoctorData);
    setShowModal(false);
    setActiveDoctor(null);
  };

  return (
    <div className="ReviewFormPanel">
      <div className="ReviewFormText">Reports</div>
      <center>
        <table className="ReviewFormTable">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>View report</th>
              <th>Download report</th>
            </tr>
          </thead>
          <tbody>
            {isLoggedIn && doctorData.map((doctor) => (
              <tr key={doctor?.id}>
                <td style={{ textAlign: 'center' }}>{doctor?.id}</td>
                <td style={{ textAlign: 'center' }}>{doctor?.name}</td>
                <td style={{ textAlign: 'center', maxWidth: '150px' }}>{doctor?.speciality}</td>
                <td style={{ textAlign: 'center' }}>
                  <button
                    className="ReviewButton"
                  >
                    View report
                  </button>
                </td>
                <td>
                  <button
                    className="ReviewButton"
                    disabled={!doctor?.review}
                  >
                    Download report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>

      <Popup
        open={showModal}
        closeOnDocumentClick
        onClose={() => {
          setShowModal(false);
          setActiveDoctor(null);
        }}
        modal
        className="review-popup-modal"
        contentStyle={{}}
      >
        {() => (
          <div className="review-modal-content">
            {activeDoctor && (
              <GiveReviews doctor={activeDoctor} onSubmit={handleFormSubmit} />
            )}
          </div>
        )}
      </Popup>
    </div>
  );
}

export default ReportsLayout;
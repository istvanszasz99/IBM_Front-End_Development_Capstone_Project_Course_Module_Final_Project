import React, { useEffect, useState, useRef } from 'react';
import './ReviewForm.css';
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = ({ children }) => {
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
      <div className="ReviewFormText">Reviews</div>
      <center>
        <table className="ReviewFormTable">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>Provide Feedback</th>
              <th>Review Given</th>
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
                    disabled={doctor?.review}
                    onClick={() => {
                      setActiveDoctor(doctor);
                      setShowModal(true);
                    }}
                  >
                    {doctor?.review ? "Reviewed" : "Click Here"}
                  </button>
                </td>
                <td>{doctor?.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>

      {/* Modal similar to instant appointment booking, bigger and without X button */}
      <Popup
        open={showModal}
        closeOnDocumentClick
        onClose={() => {
          setShowModal(false);
          setActiveDoctor(null);
        }}
        modal
        contentStyle={{
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(54,133,251,0.12)',
          padding: '32px',
          width: '520px',
          maxWidth: '98vw',
          minHeight: 'auto',
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {() => (
          <div className="doctorbg" style={{
            position: 'relative',
            padding: 32,
            width: '100%',
            minWidth: 320,
            maxWidth: 480,
            background: '#f5faff',
            borderRadius: '16px',
          }}>
            {activeDoctor && (
              <GiveReviews doctor={activeDoctor} onSubmit={handleFormSubmit} />
            )}
          </div>
        )}
      </Popup>
    </div>
  );
}

export default ReviewForm;
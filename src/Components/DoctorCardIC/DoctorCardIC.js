import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC'
import { v4 as uuidv4 } from 'uuid';

const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  // Enhanced form state for booking
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    time: ''
  });
  const [formError, setFormError] = useState('');

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError('');
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      setFormError('Name is required');
      return false;
    }
    if (!form.phoneNumber.trim() || !/^\d{10}$/.test(form.phoneNumber)) {
      setFormError('Valid 10-digit phone number is required');
      return false;
    }
    if (!form.date) {
      setFormError('Please select a date');
      return false;
    }
    if (!form.time) {
      setFormError('Please select a time slot');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const newAppointment = {
      id: uuidv4(),
      ...form,
    };
    setAppointments([...appointments, newAppointment]);
    setShowModal(false);
    setForm({ name: '', phoneNumber: '', date: '', time: '' });
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
      </div>

      <div className="doctor-card-options-container">
        <Popup
          style={{ backgroundColor: '#FFFFFF' }}
          trigger={
            <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {(close) => (
            <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
              <div>
                <div className="doctor-card-profile-image-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">{speciality}</div>
                  <div className="doctor-card-detail-experience">{experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phoneNumber}</p>
                      <p>Date: {appointment.date}</p>
                      <p>Time: {appointment.time}</p>
                      <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                    </div>
                  ))}
                </>
              ) : (
                <form onSubmit={handleFormSubmit} className="appointment-form-ic">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      value={form.name}
                      onChange={handleFormChange}
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      value={form.phoneNumber}
                      onChange={handleFormChange}
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="form-control"
                      placeholder="Enter your 10-digit phone number"
                      maxLength={10}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Select Date</label>
                    <input
                      value={form.date}
                      onChange={handleFormChange}
                      type="date"
                      name="date"
                      id="date"
                      className="form-control"
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Select Time Slot</label>
                    <select
                      value={form.time}
                      onChange={handleFormChange}
                      name="time"
                      id="time"
                      className="form-control"
                      required
                    >
                      <option value="">Select a time slot</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                    </select>
                  </div>
                  {formError && <div style={{ color: 'red', marginBottom: 10 }}>{formError}</div>}
                  <div className="btn-group">
                    <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                      Book Appointment
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mb-2 waves-effect waves-light"
                      onClick={() => {
                        setForm({ name: '', phoneNumber: '', date: '', time: '' });
                        setFormError('');
                        close();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default DoctorCardIC;

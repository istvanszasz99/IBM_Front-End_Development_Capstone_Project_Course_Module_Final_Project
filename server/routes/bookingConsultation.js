const express = require('express');
const router = express.Router();
const BookingConsultation = require('../models/BookingConsultation');

router.post('/', async (req, res) => {
    try {
        const { doctorName, doctorSpeciality, name, phone, date, timeSlot } = req.body;
        const booking = new BookingConsultation({
            doctorName,
            doctorSpeciality,
            name,
            phone,
            date,
            timeSlot
        });
        await booking.save();
        res.status(201).json({ success: true, booking });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Example POST request from frontend (e.g., in handleFormSubmit)
// await fetch('http://localhost:8181/api/booking-consultation', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         doctorName: 'Dr. Smith',
//         doctorSpeciality: 'Cardiologist',
//         name: 'John Doe',
//         phone: '1234567890',
//         date: '2024-06-01',
//         timeSlot: '09:00 - 09:30'
//     })
// });

module.exports = router;
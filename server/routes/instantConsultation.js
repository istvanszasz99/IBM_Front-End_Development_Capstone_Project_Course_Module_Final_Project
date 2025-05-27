const express = require('express');
const router = express.Router();
const InstantConsultation = require('../models/InstantConsultation');

// POST /api/instant-consultation
router.post('/', async (req, res) => {
    try {
        const { doctorName, doctorSpeciality, name, phone } = req.body;
        const instant = new InstantConsultation({
            doctorName,
            doctorSpeciality,
            name,
            phone
        });
        await instant.save();
        res.status(201).json({ success: true, instant });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
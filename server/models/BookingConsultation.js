const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingConsultationSchema = new Schema({
    doctorName: {
        type: String,
        required: true
    },
    doctorSpeciality: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('bookingconsultation', bookingConsultationSchema);
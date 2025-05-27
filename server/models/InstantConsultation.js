const mongoose = require("mongoose");
const { Schema } = mongoose;

const instantConsultationSchema = new Schema(
  {
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
        type: Number,
        required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("instantconsultation", instantConsultationSchema);
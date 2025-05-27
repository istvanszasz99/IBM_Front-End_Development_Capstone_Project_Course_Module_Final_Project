import React, { useState } from 'react';
import './SelfCheckup.css';

const selfCheckupData = [
    {
        id: 1,
        title: 'Blood Pressure Check',
        summary: 'Learn how to check your blood pressure at home.',
        details: 'Use a digital blood pressure monitor. Sit quietly for 5 minutes, place the cuff on your upper arm, and follow the device instructions. Record your readings and consult your doctor if they are consistently high or low.',
    },
    {
        id: 2,
        title: 'Skin Self-Examination',
        summary: 'Monitor your skin for unusual moles or spots.',
        details: 'Stand in front of a mirror and check your entire body for new or changing moles, spots, or growths. Use a hand mirror for hard-to-see areas. If you notice anything suspicious, consult a dermatologist.',
    },
    {
        id: 3,
        title: 'Breast Self-Exam',
        summary: 'Regular self-exams help detect changes early.',
        details: 'Use the pads of your fingers to feel for lumps or changes in your breast tissue. Perform the exam monthly, ideally a few days after your period ends. Report any changes to your healthcare provider.',
    },
];

function SelfCheckup() {
    const [expandedId, setExpandedId] = useState(null);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="selfcheckup-container">
            <h2 className="selfcheckup-title">Self Checkup Topics</h2>
            <ul className="selfcheckup-list">
                {selfCheckupData.map((tip) => (
                    <li key={tip.id} className="selfcheckup-item">
                        <h3 className="selfcheckup-item-title">{tip.title}</h3>
                        <p className="selfcheckup-item-summary">{tip.summary}</p>
                        {expandedId === tip.id && (
                            <div className="selfcheckup-item-details">
                                {tip.details}
                            </div>
                        )}
                        <button className="selfcheckup-btn" onClick={() => handleToggle(tip.id)}>
                            {expandedId === tip.id ? 'Hide Details' : 'Read More'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SelfCheckup;
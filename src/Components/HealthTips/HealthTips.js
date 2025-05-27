import React from 'react';
import './HealthTips.css';

const healthTips = [
    {
        title: "Stay Hydrated",
        description: "Drink at least 8 glasses of water a day to keep your body hydrated and functioning properly."
    },
    {
        title: "Eat Balanced Meals",
        description: "Include a variety of fruits, vegetables, lean proteins, and whole grains in your diet."
    },
    {
        title: "Exercise Regularly",
        description: "Aim for at least 30 minutes of moderate physical activity most days of the week."
    },
    {
        title: "Get Enough Sleep",
        description: "Adults should aim for 7-9 hours of quality sleep each night."
    },
    {
        title: "Manage Stress",
        description: "Practice relaxation techniques such as deep breathing, meditation, or yoga."
    }
];

function HealthTips() {
    return (
        <div className="healthtips-container">
            <h2 className="healthtips-title">Health Tips & Guidance</h2>
            <div className="healthtips-list">
                {healthTips.map((tip, index) => (
                    <div className="healthtips-card" key={index}>
                        <h3 className="healthtips-card-title">{tip.title}</h3>
                        <p className="healthtips-card-desc">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HealthTips;
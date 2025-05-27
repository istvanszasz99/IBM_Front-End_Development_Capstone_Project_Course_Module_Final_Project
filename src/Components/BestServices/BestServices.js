import React from 'react';
import { Link } from 'react-router-dom';
import './BestServices.css';

const services = [
    {
        title: 'Instant Consultation',
        description: 'Connect with a doctor instantly for quick medical advice.',
        path: '/instant-consultation',
        icon: '💬',
    },
    {
        title: 'Book an Appointment',
        description: 'Schedule an appointment with a healthcare professional.',
        path: '/booking-consultation',
        icon: '📅',
    },
    {
        title: 'Self Checkup',
        description: 'Perform a quick self-assessment of your health.',
        path: '/self-checkup',
        icon: '🩺',
    },
    {
        title: 'Health Tips & Guidance',
        description: 'Access daily health tips and expert guidance.',
        path: '/health-tips',
        icon: '💡',
    },
];

const BestServices = () => {
    return (
        <div className="best-services-container">
            <h2 className="best-services-title">Our Best Services</h2>
            <div className="services-grid">
                {services.map((service) => (
                    <Link
                        key={service.title}
                        to={service.path}
                        className="service-card"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BestServices;
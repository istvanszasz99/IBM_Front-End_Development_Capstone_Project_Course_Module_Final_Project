import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    // State variables for form fields and error
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();

    // Validation function
    const validate = () => {
        if (!name.trim()) {
            setShowerr('Name is required');
            return false;
        }
        if (!email.trim()) {
            setShowerr('Email is required');
            return false;
        }
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setShowerr('Invalid email format');
            return false;
        }
        if (!phone.trim()) {
            setShowerr('Phone is required');
            return false;
        }
        if (!/^\d{10}$/.test(phone)) {
            setShowerr('Phone must be exactly 10 digits');
            return false;
        }
        if (!password) {
            setShowerr('Password is required');
            return false;
        }
        if (password.length < 6) {
            setShowerr('Password must be at least 6 characters');
            return false;
        }
        setShowerr('');
        return true;
    };

    // Handle form submission
    const register = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                }),
            });
            const json = await response.json();
            if (json.authtoken) {
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);
                navigate("/");
                window.location.reload();
            } else {
                if (json.errors) {
                    setShowerr(json.errors[0].msg);
                } else {
                    setShowerr(json.error);
                }
            }
        } catch (err) {
            setShowerr('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text">
                    Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}>Login</Link></span>
                </div>
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                aria-describedby="helpId"
                                maxLength={10}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                aria-describedby="helpId"
                            />
                        </div>
                        {showerr && <div className="err" style={{ color: 'red', marginBottom: 10 }}>{showerr}</div>}
                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button
                                type="reset"
                                className="btn btn-danger mb-2 waves-effect waves-light"
                                onClick={() => {
                                    setName('');
                                    setEmail('');
                                    setPhone('');
                                    setPassword('');
                                    setShowerr('');
                                }}
                            >Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
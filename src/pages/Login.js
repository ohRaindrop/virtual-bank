import React from 'react';
import Button from '../components/Button';
import './Login.css';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section id="login">
            <div className="btn-section">
                <Button buttonStyle="btn--outline-gradient"
                    buttonSize="btn--medium"
                    toBtn="/"
                >
                    Go back
                </Button>
            </div>
            <div className="login-container">
                <form className="login-form"
                    onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="user-input">
                            <label for="username">
                                Username:
                                <input id="username"
                                    type="text"
                                    placeholder="enter your username" />
                            </label>
                        </div>
                        <div className="email-input">
                            <label for="username">
                                Email:
                                <input id="email"
                                    type="email"
                                    placeholder="enter your email" />
                            </label>
                        </div>
                    </div>
                    <a href="#" onClick={handleSubmit}
                        className="register-invitation">
                        Don't have an account? Register
                    </a>
                    <button type="submit"
                        className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Login

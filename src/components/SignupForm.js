import React from 'react';
import Button from './Button';
import './SignupForm.css';

const SignupForm = ({ h2, h3, p1, p2, btnText }) => {
    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="signup-headers">
                    <h2 className="signup-header">
                        {h2}
                    </h2>
                    <h3 className="signup-sub-header">
                        {h3}
                    </h3>
                </div>
                <div className="signup-content">
                    <p className="signup-parag">
                        {p1}
                        <br />
                        {p2}
                    </p>
                    <div className="btn-section">
                        <Button buttonStyle="btn--outline-gradient" ButtonSize="btn--medium">
                            {btnText}
                        </Button>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default SignupForm

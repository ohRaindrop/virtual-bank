import React from 'react';
import SignupForm from '../components/SignupForm';
import { signUpData } from '../data';

const SignUp = () => {
    return (
        <section id="signUp">
            {signUpData.map((myData, index) => {
                return <SignupForm key={myData.id} {...myData} />
            })
            }
        </section>
    )
}

export default SignUp

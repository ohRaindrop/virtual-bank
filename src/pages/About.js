import React from 'react'
import Presentation from '../components/Presentation'
import { aboutData } from '../data';

const About = () => {
    return (
        <>
            <section id="about">
                {aboutData.map((myData, index) => {
                    return <Presentation key={myData.id} {...myData} />
                })
                }
            </section>
        </>
    )
}

export default About

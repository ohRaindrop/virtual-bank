import React from 'react';
import Card from '../components/Card';
import { servicesData } from '../data';

const Services = () => {
    return (
        <>
            <section id="services">
                <h2 className="offer"> what we offer </h2>
                <div className="services-wrapper">
                    {servicesData.map((myData, index) => {
                        return <Card key={myData.id} {...myData} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Services
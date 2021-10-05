import React from 'react';
import Info from '../components/Info';
import { discoverData } from '../data';

const Discover = () => {
    return (
        <>
            <section id="discover">
                {discoverData.map((myData, index) => {
                    return <Info key={myData.id} {...myData} />
                })}
            </section>
        </>
    )
}

export default Discover

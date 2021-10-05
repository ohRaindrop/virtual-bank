import React from 'react';
import Introduction from '../components/Introduction';
import { homeData } from '../data';

const Homepage = () => {
    return (
        <>
            <section id="home">
                {homeData.map((myData, index) => {
                    return <Introduction key={myData.id} {...myData} />;
                }
                )
                }
            </section>
        </>
    );

}

export default Homepage

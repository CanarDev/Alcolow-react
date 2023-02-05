import React from 'react';
import Navbar from '../components/Navbar';
import SectionHome from "../components/SectionHome";

const Home = () => {
    return (
        <div>
            <Navbar />
            <SectionHome isBackgroundBlack={true} />
            <SectionHome isBackgroundBlack={false} />
            <div className="
                flex flex-col
                md:grid
                grid-cols-2
                gap-4
                px-4
                py-16
            ">
                <SectionHome isBackgroundBlack={true} />
                <SectionHome isBackgroundBlack={true} />
                <SectionHome isBackgroundBlack={true} />
                <SectionHome isBackgroundBlack={false} />
            </div>
        </div>
    );
}

export default Home;
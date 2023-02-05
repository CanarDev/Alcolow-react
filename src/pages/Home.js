import React from 'react';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import SectionHome from "../components/SectionHome";
import UseCocktails from '../components/Cocktails';
import CocktailsGallery from '../components/CocktailGallery';

const Home = () => {
    const [items, setItems] = useState([]);
    return (
        <>
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
            
            <UseCocktails setItemsRes={(data)=> setItems(data)}/>
            <CocktailsGallery items={items} />
        </>
    );
}

export default Home;
import React from 'react';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import UseCocktails from '../components/Cocktails';
import CocktailsGallery from '../components/CocktailGallery';
import CocktailSingle from './CocktailSingle';

const Home = () => {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState()
    return (
        <>
            <Navbar />
            <h1>Home</h1>
            <UseCocktails setItemsRes={(data)=> setItems(data)}/>
            <CocktailsGallery items={items} />
            <CocktailSingle show={show} />
        </>
    );
}

export default Home;
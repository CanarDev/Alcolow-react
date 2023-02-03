import React from 'react';
import Navbar from '../components/Navbar';
import CocktailsGallery from '../components/CocktailGallery';
import UseCocktails from '../components/Cocktails';
import { useState } from 'react';

const Home = () => {
    const [items, setItems] = useState([]);
    return (
        <div>
            <Navbar />
            <h1>Home</h1>
            <UseCocktails setItemsRes={(data)=> setItems(data)}/>
            <CocktailsGallery items={items} />
        </div>
    );
}

export default Home;
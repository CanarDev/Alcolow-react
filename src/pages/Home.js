import React, {useEffect} from 'react';

import SectionHome from "../components/SectionHome";
import axios from "axios";


const Home = () => {
    const [randCocktails, setRandCocktails] = React.useState([])

    const fetchAleatoryCocktails = (end) => {

        for (let i = 1; i <= end; i++) {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then((rescocktailRand) => {
                    console.log(rescocktailRand.data.drinks[0]);
                    setRandCocktails(prevCocktail => [...prevCocktail, rescocktailRand.data.drinks[0]])
                });
        }


    }

    useEffect(() => {
        fetchAleatoryCocktails(6)
    }, [])

    return (
        <>
            <SectionHome isBackgroundBlack={true} cocktail={randCocktails[0]} />
            <SectionHome isBackgroundBlack={false} cocktail={randCocktails[1]} />
            <div className="
                flex flex-col
                md:grid
                grid-cols-2
                gap-4
                px-4
                py-16
            ">
                <SectionHome isBackgroundBlack={true} cocktail={randCocktails[2]} />
                <SectionHome isBackgroundBlack={true} cocktail={randCocktails[3]} />
                <SectionHome isBackgroundBlack={true} cocktail={randCocktails[4]} />
                <SectionHome isBackgroundBlack={false} cocktail={randCocktails[5]} />
            </div>
        </>
    );
}

export default Home;
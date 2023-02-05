import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CocktailSingle = ({ items }) => {
    const { id } = useParams();
    const [cocktail, setCocktail] = React.useState(null)
    useEffect(() => {
        try {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((data) => {
                    console.log(data);
                    setCocktail(data.drinks);
                });
        } catch (err) {
            console.error(err);
        }
    }, [id]);
    return (
        <div>
            <Navbar />
            <h1>The choosen one {id}</h1>
            {items && items.map((cocktail) => {
                return (
                    <div key={cocktail.idDrink} className="cocktailItem">
                        <img className="drink-img" src={cocktail[0].strDrinkThumb} alt="drink-img"></img>
                        <div className="drink-name">{cocktail.strDrink}</div>
                        <div className="drink-alcool">{cocktail.strAlcoholic}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default CocktailSingle;
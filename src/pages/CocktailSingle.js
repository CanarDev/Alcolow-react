import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CocktailSingle = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = React.useState(null)
    const [ingredients, setIngredients] = React.useState([])

    console.log(cocktail)

    const showIngredients = async () => {
        setIngredients([
            cocktail.strIngredient1,
            cocktail.strIngredient2,
            cocktail.strIngredient3,

        ])
    }

    useEffect(() => {
        showIngredients()
        try {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((data) => {
                    console.log(data);
                    setCocktail(data.data.drinks[0]);
                });
        } catch (err) {
            console.error(err);
        }
    }, [id]);



    if (cocktail) {
        return (
            <div key={cocktail.idDrink}>
                <div className="
                    flex
                    flex-col
                    gap-y-5
                    py-10
                    px-12
                    shadow-md
                    shadow-grey-text/10
                    mb-24
                ">
                    <span className="
                        text-lg
                        font-thin
                        text-secondary
                    ">
                        {cocktail.strCategory}
                    </span>
                    <h1 className="
                        text-3xl
                        font-bold
                    ">{cocktail.strDrink}</h1>
                </div>
                <div className="
                    max-w-4xl
                    mx-auto
                ">
                    <h2 className="
                        font-bold
                        text-2xl
                        mb-5
                    ">Ingrédients :</h2>
                    <div className="
                        mb-14
                        flex
                        flex-wrap
                        gap-3
                    ">
                        {ingredients && ingredients.map((ingredient) => {
                            return (
                                <div key={ingredient} className="
                                    p-4
                                    bg-grey
                                ">
                                    {ingredient}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div  className="cocktailItem">
                    <img className="drink-img" src={cocktail.strDrinkThumb} alt="drink-img"></img>
                    <div className="drink-name">{cocktail.strDrink}</div>
                    <div className="drink-alcool">{cocktail.strAlcoholic}</div>
                </div>
            </div>
        );
    }
}

export default CocktailSingle;
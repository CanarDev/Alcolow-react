import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cta from "../components/Cta";
import CardProduct from "../components/CardProduct";

const CocktailSingle = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = React.useState(null)
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

        fetchAleatoryCocktails(3)
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
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient1 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient1 ? cocktail.strIngredient1 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient2 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient2 ? cocktail.strIngredient2 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient3 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient3 ? cocktail.strIngredient3 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient4 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient4 ? cocktail.strIngredient4 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient5 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient5 ? cocktail.strIngredient5 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient6 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient6 ? cocktail.strIngredient6 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient7 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient7 ? cocktail.strIngredient7 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient8 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient8 ? cocktail.strIngredient8 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient9 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient9 ? cocktail.strIngredient9 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient11 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient11 ? cocktail.strIngredient11 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient12 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient12 ? cocktail.strIngredient12 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient13 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient13 ? cocktail.strIngredient13 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient14 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient14 ? cocktail.strIngredient14 : "" }
                        </div>
                        <div className={`
                            bg-grey
                            rounded-xl
                            p-4
                            ${cocktail.strIngredient15 ? "block" : "hidden"}
                        `}>
                            {cocktail.strIngredient15 ? cocktail.strIngredient15 : "" }
                        </div>
                    </div>
                    <h2 className="
                        font-bold
                        text-2xl
                        mb-5
                    ">Recette :</h2>
                    <p className="text-grey-text mb-14">{cocktail.strInstructions}</p>
                </div>
                <img className="mx-auto rounded-3xl max-w-xl mb-14 w-full" src={cocktail.strDrinkThumb} alt="drink-img"></img>
                <div className="border mb-14 max-w-4xl mx-auto"></div>
                <div className="mb-20 mx-auto max-w-4xl w-full">
                    <Cta />
                </div>
                <div className="max-w-4xl mx-auto mb-14 flex flex-col w-full gap-y-3">
                    {randCocktails && randCocktails.map((cocktail) => {
                        return (
                            <CardProduct key={cocktail.idDrink} cocktail={cocktail} isCardProductColumn={false} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default CocktailSingle;
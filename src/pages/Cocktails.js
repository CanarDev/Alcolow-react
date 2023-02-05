import axios from "axios";
import React, {useEffect} from "react";
import CardCategory from "../components/CardCategory";
import CardProduct from "../components/CardProduct";
import Cta from "../components/Cta";

const Cocktails = () => {
    const [categories, setCategories] = React.useState(null)
    const [randCocktails, setRandCocktails] = React.useState([])
    const [randLitleCocktails, setLitleRandCocktails] = React.useState([])
    const fetchCategories = () => {
        try {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
                .then((resCategory) => {
                    console.log(resCategory);
                    setCategories(resCategory.data.drinks)
                });
        } catch (err) {
            console.error(err);
        }
    }
    const fetchAleatoryCocktails = (end) => {

        for (let i = 1; i <= end; i++) {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then((rescocktailRand) => {
                    console.log(rescocktailRand.data.drinks[0]);
                    setRandCocktails(prevCocktail => [...prevCocktail, rescocktailRand.data.drinks[0]])
                });
        }


    }
    const fetchAleatoryLitleCocktails = (end) => {

        for (let i = 1; i <= end; i++) {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then((rescocktailRand) => {
                    console.log(rescocktailRand.data.drinks[0]);
                    setLitleRandCocktails(prevCocktail => [...prevCocktail, rescocktailRand.data.drinks[0]])
                });
        }


    }
    useEffect(() => {fetchCategories(); setRandCocktails([]); fetchAleatoryCocktails(10); setLitleRandCocktails([]); fetchAleatoryLitleCocktails(5)}, [])



    return (
        <div className="
            max-w-4xl mx-auto
        ">
            <h1 className="
                text-4xl
                text-grey-text
                mt-20
                mb-14
            ">
                <span className="
                    text-black
                ">Nos Produits.</span>
            On vous assure qu’ils deviendront vos produits favoris !</h1>


            <h2 className="
                    text-2xl
                    text-grey-text
                    mb-5
                ">
                <span className="
                    text-black
                ">Nos Produits.</span>
                On vous assure qu’ils deviendront vos produits favoris !</h2>

            <div className="
                flex
                flex-wrap
                items-center
                gap-3
                mb-14
            ">

                {categories && categories.map((category) => {
                    return (
                        <CardCategory key={category.strCategory} category={category} />
                    )
                })}
            </div>
            <h2 className="
                    text-2xl
                    text-grey-text
                    mb-5
                ">
                <span className="
                    text-black
                ">Inspiration certifiées alcolauw. </span>
                 Vous ne serez pas déçu.</h2>

            <div className="
                max-w-8xl
                overflow-x-scroll
                flex

                gap-x-3
                mb-14
            ">
                {randCocktails && randCocktails.map((cocktail) => {
                    return (
                        <CardProduct key={cocktail.idDrink} cocktail={cocktail} isCardProductColumn={true} />
                    )
                })}
            </div>

            <h2 className="
                    text-2xl
                    text-grey-text
                    mb-5
                ">
                <span className="
                    text-black
                ">Assistance. </span>
                Toujours disponible pour vous, une question une réponse !</h2>

            <div className="
                mb-14
            ">
                <Cta />
            </div>

            <h2 className="
                    text-2xl
                    text-grey-text
                    mb-5
                ">
                <span className="
                    text-black
                ">Nos produits. </span>
                Il n’en manque pas un seul (promis).</h2>

            <div className="mb-14 flex flex-col w-full gap-y-3">
                {randLitleCocktails && randLitleCocktails.map((cocktail) => {
                    return (
                        <CardProduct key={cocktail.idDrink} cocktail={cocktail} isCardProductColumn={false} />
                    )
                })}
            </div>
        </div>
    );
}

export default Cocktails;
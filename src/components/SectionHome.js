import React from 'react';
import {Link} from "react-router-dom";

function SectionHome(props) {
    if (props.cocktail) {
        return (
            <div className={`
            pt-12
            ${props.isBackgroundBlack ? "bg-black text-grey" : "bg-grey" }
        `}>
                <div className="
                max-w-lg
                mx-auto
                px-8
            ">
                    <div className="
                    flex
                    flex-col
                    gap-4
                    mb-14
                ">
                        <h2 className="
                        text-4xl
                        text-center
                        font-bold
                    ">{props.cocktail.strDrink}</h2>
                        <p className="
                        text-3xl
                        text-center
                    ">{props.cocktail.strCategory}</p>
                        <div className="
                        flex justify-around
                        text-primary
                        text-xl
                    ">
                            <Link to={`/cocktail/${props.cocktail.idDrink}`}>En savoir plus ></Link>
                        </div>
                    </div>
                    <img src={props.cocktail.strDrinkThumb} alt="" className={`
                    h-80
                    w-full
                    border-0
                    object-cover
                    ${props.isBackgroundBlack ? "bg-grey-darker" : "bg-white"}
                `}/>
                </div>
            </div>

        );
    }
}

export default SectionHome;

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function CardProduct(props) {

    return (
        <div className={`
            ${props.isCardProductColumn ? "min-w-max" : "w-full"}
            flex
            ${props.isCardProductColumn ? "flex-col" : "flex-row justify-between"}
            justify-between
            rounded-3xl
            bg-grey
            ${props.isCardProductColumn ? "pt-12" : "pt-12"}
        `}>
            <div className={`
                flex
                flex-col
                gap-y-10
                px-10
                ${props.isCardProductColumn ? "pb-0" : "pb-12"}
            `}>
                <ul className="
                    flex
                    gap-x-10
                    font-thin
                    uppercase
                ">
                    <li>{props.cocktail.strAlcoholic}</li>
                    <li>{props.cocktail.strCategory}</li>
                </ul>
                <p className="
                    text-3xl
                    font-bold
                    mb-8

                ">{props.cocktail.strDrink}</p>
            </div>
            <img src={props.cocktail.strDrinkThumb} alt="" className={`
                max-w-lg
                w-full
                ${props.isCardProductColumn ? "rounded-b-3xl h-96" : "h-40 self-end"}
                object-cover
            `}/>
        </div>

    );
}

export default CardProduct;

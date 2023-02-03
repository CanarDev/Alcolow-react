import React from "react";
import { Link } from "react-router-dom";

const CocktailsGallery = ({ items }) => {
  return (
    <div className="cocktailGallery">
      <h2>Cocktails</h2>
      <div className="cocktails">
        {items && items.map((cocktail) => {
          return (
            <div key={cocktail.idDrink} className="cocktailItem">
              <img className="drink-img" src={cocktail.strDrinkThumb} alt="drink-img"></img>
              <div className="drink-name">{cocktail.strDrink}</div>
              <div className="drink-alcool">{cocktail.strAlcoholic}</div>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <button className="btn">Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailsGallery;
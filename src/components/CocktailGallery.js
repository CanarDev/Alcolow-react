import React from "react";
import { Link } from "react-router-dom";

const CocktailsCon = ({ items }) => {
  return (
    <div className="cocktailGallery">
      <h2>Cocktails</h2>
      <div className="cocktailsGrid">
        {items.map((cocktail) => {
          console.log("id: ", cocktail.idDrink);
          return (
            <div>
              <div key={cocktail.idDrink} className="cocktailItem">
                <img className="drink-img" src={cocktail.strDrinkThumb} alt="drink-img"></img>
                <div className="drink-name">{cocktail.strDrink}</div>
                <div className="drink-alcool">{cocktail.strAlcoholic}</div>
                <Link to={`/cocktail/${cocktail.idDrink}`}>
                  <button className="btn">Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailsCon;
import React from "react";

const CocktailDetail = ({ cocktailDetail }) => {
  return (
    <div className="cocktailsingle">
        <img src={cocktailDetail[0].strDrinkThumb} alt="drink-img" />
        <div className="drink-infos">
          <span className="drink-name">Name: </span>
          {cocktailDetail[0].strDrink}
          <span className="drink-category">Category: </span>
          {cocktailDetail[0].strCategory}
          <span className="drink-alcool">Info: </span>
          {cocktailDetail[0].strAlcoholic}
          <span className="drink-glass">Glass: </span>
          {cocktailDetail[0].strGlass}
          <span className="drink-instructions">Instructions: </span>
          {cocktailDetail[0].strInstructions}
          <span className="drink-ingredients">Ingredients: </span>
          {cocktailDetail[0].strIngredient1}
      </div>
    </div>
  );
};

export default CocktailDetail;
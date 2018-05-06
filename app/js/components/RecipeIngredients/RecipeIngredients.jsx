import React from 'react';
import  PropTypes from 'prop-types';
import style from './RecipeIngredients.scss';


const recipeIngredientList = (ingredientsObject) => {
  const ingredientsArray = [];
  for (const ingredient in ingredientsObject ) {
    ingredientsArray.push(ingredientsObject[ingredient]);
  }
  return ingredientsArray;
}

const renderList = (ingredientsArray) => {
  return ingredientsArray.map((ingredient, index) => {
    return <li className="" key={index}>{ingredient.amount} {ingredient.measurement} {ingredient.ingredient}</li>;
  });
}

const RecipeIngredients = props => (
  <div className={style.ingredient__wrapper}>
    <h3>Ingredienser:</h3>
    <ul className={style.ingredient__list}>
      { renderList(recipeIngredientList(props.ingredients)) }
    </ul>
  </div>
);

RecipeIngredients.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default RecipeIngredients;

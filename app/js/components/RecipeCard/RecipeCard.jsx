import React from 'react';
import  PropTypes from 'prop-types';
import style from './RecipeCard.scss';
const assetURL = "../../../app/assets/";
import CookingTime from "../RecipeCookingTime/RecipeCookingTime";
import CookingDifficulty from "../RecipeDifficulty/RecipeDifficulty";


const RecipeCard = props => (
  <div className={style.recipe__card__wrapper}>
    <div className={style.recipe__card__image__wrapper}>
      <img className={style.recipe__card__image} src={assetURL + props.images.mobile} alt={props.title} />
    </div>
    <div className={style.recipe__card__infocontainer}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.summary}>{props.summary}</div>
      <div className={style.recipe__complexity__container} >
        <div className={style.cookingTime}><CookingTime cookingtime={props.cookingTime} ></CookingTime></div>
        <div className={style.cookingDifficulty}><CookingDifficulty cookingdifficulty={props.difficulty} ></CookingDifficulty></div>
      </div>
      <div className={style.recipe__card__button}><span className={style.recipe__card__button__text}>Byt recept</span></div>
    </div>
  </div>
);

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cookingTime: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired
};

export default RecipeCard;

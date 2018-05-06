import React from 'react';
import  PropTypes from 'prop-types';
import style from './RecipeDifficulty.scss';


const RecipeDifficulty = props => (
  <div className={style.recipe__difficulty}>
    { props.cookingdifficulty }
  </div>
);

RecipeDifficulty.propTypes = {
  cookingdifficulty: PropTypes.string.isRequired
};

export default RecipeDifficulty;

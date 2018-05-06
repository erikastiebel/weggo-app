import React from 'react';
import  PropTypes from 'prop-types';
import style from './RecipeImages.scss';
const assetURL = "../../../app/assets/";
const RecipeImages = props => (

  <div className={style.imageContainer}>
      <img src={assetURL + props.images.full} alt="{props.images.full}" />
  </div>
);

RecipeImages.propTypes = {
  images: PropTypes.object.isRequired
};

export default RecipeImages;

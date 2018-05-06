import React from 'react';
import  PropTypes from 'prop-types';


const RecipeImages = props => (
  <div className="">
      <p>Bild... { props.images.full}</p>
  </div>
);

RecipeImages.propTypes = {
  images: PropTypes.object.isRequired
};

export default RecipeImages;

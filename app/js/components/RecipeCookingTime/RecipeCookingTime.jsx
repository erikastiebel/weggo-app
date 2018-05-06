import React from 'react';
import  PropTypes from 'prop-types';

const displayCookingTime = (cookingTimeObject) => {
  if(cookingTimeObject.hrs == 0 && cookingTimeObject.mins > 0) {
    return cookingTimeObject.mins + ' min';
  }
  else if (cookingTimeObject.hrs > 0 && cookingTimeObject.mins == 0) {
    return cookingTimeObject.hrs + ' tim';
  }
  else {
    return cookingTimeObject.hrs + ' tim och ' + cookingTimeObject.mins + ' min';
  }
}

const RecipeCookingTime = props => (
  <div className="">
    { displayCookingTime(props.cookingtime) }
  </div>
);

RecipeCookingTime.propTypes = {
  cookingtime: PropTypes.object.isRequired
};

export default RecipeCookingTime;

import React from 'react';
import  PropTypes from 'prop-types';

import style from './RecipeCookingInstructions.scss';

const cookingInstructionsList = (cookingInstructionsObject) => {
  const cookingInstructionsArray = [];
  for (const cookingInstruction in cookingInstructionsObject ) {
    cookingInstructionsArray.push(cookingInstructionsObject[cookingInstruction]);
  }
  return cookingInstructionsArray;
  console.log('cookingInstructionsObject: ', cookingInstructionsObject);
}

const renderList = (cookingInstructionsArray) => {
  return cookingInstructionsArray.map((cookingInstruction, index) => {
    return <li className={style.instructions__list_item} key={index}> {cookingInstruction}</li>;
  });
}

const RecipeCookingInstructions = props => (
  <div className={style.instructions__container}>
    <h2 className={style.instructions_heading}>Gör så här</h2>
    <ol className={style.instructions__list}>
      { renderList(cookingInstructionsList(props.instructions)) }
    </ol>
  </div>
);

RecipeCookingInstructions.propTypes = {
  instructions: PropTypes.object.isRequired
};

export default RecipeCookingInstructions;

import React from 'react';
import  PropTypes from 'prop-types';

const cookingInstructionsList = (cookingInstructionsObject) => {
  const cookingInstructionsArray = [];
  for (const cookingInstruction in cookingInstructionsObject ) {
    cookingInstructionsArray.push(cookingInstructionsObject[cookingInstruction]);
  }
  return cookingInstructionsArray;
  console.log(cookingInstructionsObject);
}

const renderList = (cookingInstructionsArray) => {
  return cookingInstructionsArray.map((cookingInstruction, index) => {
    return <li className="" key={index}>{index + 1} {cookingInstruction}</li>;
  });
}

const RecipeCookingInstructions = props => (
  <div className="">
    <ul>
      { renderList(cookingInstructionsList(props.instructions)) }
    </ul>
  </div>
);

RecipeCookingInstructions.propTypes = {
  instructions: PropTypes.object.isRequired
};

export default RecipeCookingInstructions;

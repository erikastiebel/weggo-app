import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';
import RecipeIngredients from './RecipeIngredients';
import RecipeCookingInstructions from './RecipeCookingInstructions';
import RecipeImages from './RecipeImages';
import RecipeCookingTime from './RecipeCookingTime';

import style from '../../scss/style.scss';


class RecipeContainer extends Component {

  componentWillMount() {
    if (this.props.recipesData.length > 0) {
      const recipeIdInURL = this.props.match.params.id;

      this.recipe =  this.props.recipesData.find(function (recipe) {
          return recipe.id == recipeIdInURL;
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipesData.length > 0 && this.props.recipesData !== nextProps.recipesData) {
      const recipeIdInURL = this.props.match.params.id;
      this.recipe =  nextProps.recipesData.find(function (recipe) {
          return recipe.id == recipeIdInURL;
      });
      if (this.recipe == undefined) {
        this.props.dispatch(fetchRecipeByID(recipeIdInURL, this.state));
      }
    }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesData: PropTypes.array.isRequired,
    recipe: PropTypes.object
  }

  render() {

    let recipeObject = '',
        ingredients,
        instructions,
        images,
        cookingTime;
    if(typeof this.recipe != 'undefined') {
      recipeObject = this.recipe;

      ingredients = <RecipeIngredients
        key={recipeObject.id}
        ingredients={recipeObject.ingredients}
      />
      instructions = <RecipeCookingInstructions
        key={recipeObject.id}
        instructions={recipeObject.instructions}
      />
      images = <RecipeImages
        key={recipeObject.id}
        images={recipeObject.images}
      />
      cookingTime = <RecipeCookingTime
        key={recipeObject.id}
        cookingtime={recipeObject.cookingtime}
      />
    }

    return (
      <div id="recipeObjectContainer">
        <h2>{ recipeObject.title } </h2>
        <div>{ images }</div>
        <div> { cookingTime } </div>
        <h4>{ recipeObject.summary }</h4>
        <div>Ingredienser:</div>
        <div>{ ingredients }</div>
        <hr/>
        <div>Instruktioner:</div>
        <div>{ instructions }</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    recipesData: state.recipesData
  };
}

export default connect(mapStateToProps)(RecipeContainer);

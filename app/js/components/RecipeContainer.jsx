import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeCookingInstructions from './RecipeCookingInstructions/RecipeCookingInstructions';
import RecipeImages from './RecipeImages/RecipeImages';
import RecipeCookingTime from './RecipeCookingTime/RecipeCookingTime';
import RecipeDifficulty from './RecipeDifficulty/RecipeDifficulty';

import containerStyle from './RecipeContainer.scss';

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
        cookingTime,
        cookingDifficulty;

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
      cookingDifficulty = <RecipeDifficulty
        key={recipeObject.id}
        cookingdifficulty={recipeObject.difficulty}
      />
    }

    return (
      <div className={containerStyle.container__wrapper}>
        <div className={containerStyle.recipe__hero}>
          <div className={containerStyle.recipe__title_wrapper}>
            <h1 className={containerStyle.recipe__title}>{ recipeObject.title } </h1>
            <p className={containerStyle.recipe__summary}>{ recipeObject.summary }</p>
          </div>
          <div>{ images }</div>
        </div>
        <div className={containerStyle.recipe__wrapper}>
          <div className={containerStyle.recipe__complexity__container} >
            <div> { cookingTime } </div>
            <div> { cookingDifficulty } </div>
          </div>
          <div className={containerStyle.recipe__information__container}>
            <div className={containerStyle.ingredient__container}>{ ingredients }</div>
            <div className={containerStyle.instructions__container}>{ instructions }</div>
          </div>
        </div>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getRandomRecipes } from '../actions/actions';
import { connect } from 'react-redux';


function makeRecipesList(recipeObject) {
  const recipesList = [];
  for (const recipe in recipeObject) {
    if (recipeObject) {
      recipesList.push(recipeObject[recipe]);
    }
  }
  return recipesList;
}

class Recipes extends Component {

  componentDidMount() {
   this.props.dispatch(getRandomRecipes(this.props.state, this.props.match.params.number))
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesData: PropTypes.array.isRequired,
    recipesList: PropTypes.array.isRequired
  }

  renderRecipes() {
    return this.props.recipesList.map(function(recipe, index) {
      return <li key={index}>{recipe.title}</li>;

    });
  }

  render() {
    return (
      <div className="recipes__container">
        <ul>
          {this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    recipesData: state.recipesData,
    recipesList: makeRecipesList(state.randomRecipesData.visibleRecipes)
  };
}

export default connect(mapStateToProps)(Recipes);

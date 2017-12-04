import React from "react";
import PropTypes from 'prop-types';
import { fetchRecipes } from "../actions/actions";
import { connect } from "react-redux";

// const classNames = require("classnames");

function makeRecipesList(recipeObject) {
  const recipesList = [];
  for (const recipe in recipeObject) {
    if (recipeObject) {
      recipesList.push(recipeObject[recipe]);
    }
  }
  return recipesList;
}

class Recipes extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    makeRecipesList: PropTypes.array.isRequired
  }

renderRecipes() {
  return this.props.makeRecipesList.map(function(recipe, index) {
    return <li key={index}>{recipe.title}</li>;
  });
}

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipesData: state.recipesData,
    makeRecipesList: makeRecipesList(state.recipesData)
  };
}

export default connect(mapStateToProps)(Recipes);

import React from 'react';
import PropTypes from 'prop-types';
import { fetchRecipes } from '../actions/actions';
import { connect } from 'react-redux';

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

  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesList: PropTypes.array.isRequired
  }

  renderRecipes() {
    return this.props.recipesList.map(function(recipe, index) {
      return <li key={index}>{recipe.title}</li>;

    });
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    return (
      <div className="recipes__container">
        <ul>
          { this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipesData: state.randomRecipesData.visibleRecipes,
    recipesList: makeRecipesList(state.randomRecipesData.visibleRecipes)
  };
}

export default connect(mapStateToProps)(Recipes);

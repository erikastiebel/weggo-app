import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomRecipes } from '../actions/actions';
import { makeRecipesList } from './LoadRecipes';


class Recipes extends Component {

  componentDidMount() {
    if (this.props.recipesData.length > 0) {
      this.props.dispatch(getRandomRecipes(this.props.state, this.props.match.params.number));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipesData.length > 0 && this.props.recipesData !== nextProps.recipesData) {
      this.props.dispatch(getRandomRecipes(nextProps, this.props.match.params.number));
    }
  }
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesData: PropTypes.array.isRequired,
    recipesList: PropTypes.array.isRequired
  }

  renderRecipes() {
    if (this.props.recipesData !== 'undefined') {
      return this.props.recipesList.map(function(recipe, index) {
        return <li key={index}>{recipe.title}</li>;
      });
    }
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

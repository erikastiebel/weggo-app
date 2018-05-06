import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RecipeCard from './RecipeCard/RecipeCard';
import { getRandomRecipes, makeRecipesList } from '../actions/actions';
import { NavLink } from 'react-router-dom';

import style from './recipes.scss';

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
        return <div key={index} id={index}><NavLink key={index} to={'/recipe/'+recipe.id}><RecipeCard key={index} title={recipe.title} summary={recipe.summary} images={recipe.images} cookingTime={recipe.cookingtime} difficulty={recipe.difficulty} ></RecipeCard></NavLink></div>;
      });
    }
  }

  render() {
    return (
      <div className={style.recipes__container}>
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

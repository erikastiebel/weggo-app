import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';

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

    let recipeObject = '';
    if(typeof this.recipe != 'undefined') {
      recipeObject = this.recipe.title
    }

    return (
      <div id="recipeObjectContainer">
        { recipeObject }
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

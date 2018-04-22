import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipeByID } from '../actions/actions';


import style from '../../scss/style.scss';

const getRecipe = (recipeID, ) => {

}


class Recipe extends Component {

  componentDidMount() {
    if (this.props.recipesData.length > 0) {
      const recipeIdInURL = this.props.match.params.id;

      const theRecipe =  this.props.recipesData.find(function (recipe) {
          return recipe.id == recipeIdInURL;
      });
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.recipesData.length > 0 && this.props.recipesData !== nextProps.recipesData) {
      const recipeIdInURL = this.props.match.params.id;
      const theRecipe =  nextProps.recipesData.find(function (recipe) {
          return recipe.id == recipeIdInURL;
      });
      if (theRecipe == undefined) {
        this.props.dispatch(fetchRecipeByID(recipeIdInURL, this.state));
    }
    }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesData: PropTypes.array.isRequired
  }


  render() {
    return (
      <div>
        ETT RECEPT!!!!!
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

export default connect(mapStateToProps)(Recipe);

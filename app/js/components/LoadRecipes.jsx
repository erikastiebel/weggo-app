import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRecipes } from '../actions/actions';
import { connect } from 'react-redux';

export const  makeRecipesList = (recipeObject) => {
  const recipesList = [];
  if (recipeObject !== []){
    for (const recipe in recipeObject) {
      if (recipeObject) {
        recipesList.push(recipeObject[recipe]);
      }
    }
  }
  return recipesList;
}

export default class LoadRecipes extends Component {

  // static propTypes = {
  //   dispatch: PropTypes.func.isRequired
  // }
  //
  // componentDidMount() {
  //   this.props.dispatch(fetchRecipes());
  // }

  render() {
    return (
      <div className="recipes__container">
        LOADED RECIPES IN THE BACKGROUND...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

//export default connect(mapStateToProps)(LoadRecipes);

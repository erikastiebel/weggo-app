import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRecipes } from '../actions/actions';
import { connect } from 'react-redux';

const  makeRecipesList = (recipeObject) => {
  const recipesList = [];
  for (const recipe in recipeObject) {
    if (recipeObject) {
      recipesList.push(recipeObject[recipe]);
    }
  }
  return recipesList;
}

class LoadRecipes extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    return (
      <div className="recipes__container">
        START!!
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(LoadRecipes);

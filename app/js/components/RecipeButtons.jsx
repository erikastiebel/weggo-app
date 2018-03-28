import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomRecipes } from '../actions/actions';
import { NavLink } from 'react-router-dom';


class RecipeButtons extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="button__container">
        <div className="button__item-wrapper">
          <NavLink className="button__item" to="/recipes/3">3</NavLink>
          <NavLink className="button__item" to="/recipes/5">5</NavLink>
          <NavLink className="button__item" to="/recipes/6">6</NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    randomRecipesData: state.randomRecipesData
  }
};

export default connect(mapStateToProps)(RecipeButtons);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomRecipes } from '../../actions/actions';
import { NavLink } from 'react-router-dom';

import style from './RecipeButtons.scss';


class RecipeButtons extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className={style.button__container}>
        <div className={style.button__item_wrapper}>
          <NavLink className={style.button__item} to="/recipes/3">3</NavLink>
          <NavLink className={style.button__item} to="/recipes/5">5</NavLink>
          <NavLink className={style.button__item} to="/recipes/6">6</NavLink>
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

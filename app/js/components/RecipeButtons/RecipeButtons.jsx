import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <div className={style.text__container}>
          <h1 className={style.welcometext}>
            Skapa en mer vegetarisk vardag!<br/>Slumpa fram enkla och goda vegetariska recept!
            </h1>
          </div>
        <div className={style.button__item_wrapper}>
          <NavLink className={style.randomLink} to="/recipes/3"><button className={style.button__item}>3 recept</button></NavLink>
          <NavLink className={style.randomLink} to="/recipes/5"><button className={style.button__item}>5 recept</button></NavLink>
          <NavLink className={style.randomLink} to="/recipes/7"><button className={style.button__item}>7 recept</button></NavLink>
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

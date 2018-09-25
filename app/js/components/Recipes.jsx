import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RecipeCard from './RecipeCard/RecipeCard';
import { getRandomRecipes, getNewRecipe, saveMenuList } from '../actions/actions';
import SaveListButton from '../components/SaveListButton/SaveListButton';

import style from './recipes.scss';

class Recipes extends Component {

  componentDidMount() {
    if (this.props.recipesData.recipes.length > 0) {
      this.props.dispatch(getRandomRecipes(this.props.match.params.number));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipesData.recipes.length > 0 && this.props.recipesData.recipes !== nextProps.recipesData.recipes) {
      this.props.dispatch(getRandomRecipes(this.props.match.params.number));
    }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesData: PropTypes.object.isRequired,
    recipesList: PropTypes.array.isRequired
  }

  renderRecipes() {
    const { dispatch } = this.props;
    const switchRecipe = bindActionCreators(getNewRecipe, dispatch);


    if (this.props.recipesData !== 'undefined') {
      return this.props.recipesList.map(function(recipe, index) {
        return (
          <div key={index} id={index}>
              <RecipeCard
                key={index}
                id={recipe.id}
                index={index}
                switchRecipe={switchRecipe}
                title={recipe.title}
                summary={recipe.summary}
                images={recipe.images}
                cookingTime={recipe.cookingtime}
                difficulty={recipe.difficulty}
              />
          </div>
        );
      });
    }
  }

  render() {
    const { dispatch } = this.props;
    const saveMenu = bindActionCreators(saveMenuList, dispatch);

    return (

      <div className={style.recipes__container}>
        <SaveListButton
          saveMenu={saveMenu}
        />
        <ul>
          {this.renderRecipes()}
        </ul>
        <SaveListButton
          saveMenu={saveMenu}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    recipesData: state.recipesDB,
    recipesList: state.randomRecipes.visibleRecipes
  };
}

export default connect(mapStateToProps)(Recipes);

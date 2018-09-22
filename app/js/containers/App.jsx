import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fetchRecipes } from '../actions/actions';
import Header from '../components/Header/Header';
import RecipeButtons from '../components/RecipeButtons/RecipeButtons';
import Recipes from '../components/Recipes';
import RecipeContainer from './RecipeContainer/RecipeContainer';
import Login from '../components/Login';

import style from '../../scss/style.scss';


const Home = () => (
  <main role="main" className="main">
      <RecipeButtons />
  </main>
);


class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    return (
      <BrowserRouter>
          <div>
              <Header ></Header>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/recipes/:number" component={Recipes} />
              <Route path="/recipe/:id" component={RecipeContainer} />
              <footer className={style.footer}>Footer</footer>
          </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const {recipesData} = state;
  return {
    recipesData: recipesData
  };
}

export default connect(mapStateToProps)(App);

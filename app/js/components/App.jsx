import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fetchRecipes } from '../actions/actions';
import RecipeButtons from './RecipeButtons/RecipeButtons';
import Recipes from './Recipes';
import RecipeContainer from './RecipeContainer';
import Login from './Login';

import style from '../../scss/style.scss';
console.log(style);


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
              <header className={style.header}>
                  <nav className={style.header__nav}>Navigation</nav>
                  <div className={style.header__logo}><Link to="/">Weggo Logo</Link></div>
                  <div className={style.header__login}><Link to="/login">Log In</Link></div>
              </header>
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

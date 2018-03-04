import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LoadRecipes from './LoadRecipes';
import RecipeButtons from './RecipeButtons';
import Recipes from './Recipes';
import Login from './Login';


const Home = () => (
  <main role="main" className="main">
      <RecipeButtons />
      <LoadRecipes />
  </main>
);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <header className="header">
                  <nav className="header__nav">Navigation</nav>
                  <div className="header__logo"><Link to="/">Weggo Logo</Link></div>
                  <div className="header__login"><Link to="/login">Log In</Link></div>
              </header>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/recipes/:number" component={Recipes} />

              <footer className="footer">Footer</footer>
          </div>
      </BrowserRouter>
    );
  }
}

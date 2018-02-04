import React from 'react';
import Recipes from './Recipes';
import RecipeButtons from './RecipeButtons';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="header__nav">Navigation</nav>
          <div className="header__logo">Weggo-Logo</div>
          <div className="header__login">Log In</div>
        </header>
        <main role="main" className="main">
          <RecipeButtons />
          <Recipes />
        </main>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

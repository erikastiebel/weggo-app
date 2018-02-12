import React from 'react';
import Recipes from './Recipes';
import RecipeButtons from './RecipeButtons';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Home = () => (
  <main role="main" className="main">
      <RecipeButtons />
      <Recipes />
  </main>
);

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <div>
              <header className="header">
                  <nav className="header__nav">Navigation</nav>
                  <div className="header__logo"><Link to="/">Weggo Logo</Link></div>
                  <div className="header__login"><Link to="/login">Log In</Link></div>
              </header>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />

              <footer className="footer">Footer</footer>
          </div>
      </Router>
    );
  }
}

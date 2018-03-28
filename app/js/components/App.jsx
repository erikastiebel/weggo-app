import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fetchRecipes } from '../actions/actions';
import RecipeButtons from './RecipeButtons';
import Recipes from './Recipes';
import Login from './Login';


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

function mapStateToProps(state) {
  const {recipesData} = state;
  return {
    recipesData: recipesData
  };
}

export default connect(mapStateToProps)(App);

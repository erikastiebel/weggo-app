import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fetchRecipes } from '../actions/actions';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header';
import RecipeButtons from '../components/RecipeButtons/RecipeButtons';
import Recipes from '../components/Recipes';
import RecipeContainer from './RecipeContainer/RecipeContainer';
import Login from '../components/Login/Login';
import {logoutUserAction} from '../actions/actions';

import style from '../../scss/style.scss';


const Home = () => (
  <main role="main" className="main">
      <RecipeButtons />
  </main>
);


class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired

  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const { dispatch } = this.props;
    const logout = bindActionCreators(logoutUserAction, dispatch);

    return (
      <BrowserRouter>
          <div>
              <Header userData={this.props.userData} logout={logout}></Header>
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
  return {
    state: state,
    recipesData: state.recipesData,
    userData: state.userData
  };
}

export default connect(mapStateToProps)(App);

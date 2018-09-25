import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import style from './Header.scss';


const isUserLogedIn = (logedIn) => {
  return  logedIn ? <Link to="/">Log Out</Link> : <Link to="/login">Log In</Link>
};

const Header = props => (
  <header className={style.header}>
    <div className={style.header__inner_wrapper}>
      <nav className={style.header__nav}>Navigation</nav>
      <div className={style.header__logo}><Link to="/"><img className={style.header__logo__svg} src="../../../app/assets/images/weggo_logo.svg" alt="Weggo" /></Link></div>
      <div className={style.header__login}>{isUserLogedIn(props.userData.isLogedIn)}</div>
    </div>
  </header>
);

Header.propTypes = {
  userData: PropTypes.object.isRequired
};

export default Header;

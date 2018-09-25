import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import style from './Header.scss';


const isUserLogedIn = (logedIn, logoutFunction) => {
  return logedIn ? <a className={style.header__logout} onClick={() => logoutFunction()}>Logga ut</a> : <Link to="/login" className={style.header__login}>Logga in</Link>
}

const Header = props => (
  <header className={style.header}>
    <div className={style.header__inner_wrapper}>
      <nav className={style.header__nav}>Navigation</nav>
      <div className={style.header__logo}><Link to="/"><img className={style.header__logo__svg} src="../../../app/assets/images/weggo_logo.svg" alt="Weggo" /></Link></div>
      <div className={style.header__login_wrapper}>{isUserLogedIn(props.userData.isLogedIn , props.logout)}</div>
    </div>
  </header>
);

Header.propTypes = {
  userData: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;

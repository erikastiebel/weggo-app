import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import style from './Header.scss';


const Header = props => (
  <header className={style.header}>
    <nav className={style.header__nav}>Navigation</nav>
    <div className={style.header__logo}><Link to="/"><img className={style.header__logo__svg} src="../../../app/assets/images/weggo_logo.svg" alt="Weggo" /></Link></div>
    <div className={style.header__login}><Link to="/login">Log In</Link></div>
  </header>
);
Header.propTypes = {

};

export default Header;

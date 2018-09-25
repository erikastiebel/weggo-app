import React from 'react';
import PropTypes from 'prop-types';

import style from './SaveListButton.scss';


const SaveListButton = props => (
  <div className={style.save_list__wrapper}>
    <button className={style.save_list__button} onClick={() => props.saveMenu()}>Spara menyn</button>
  </div>
);

SaveListButton.propTypes = {
  saveMenu: PropTypes.func.isRequired
};

export default SaveListButton;

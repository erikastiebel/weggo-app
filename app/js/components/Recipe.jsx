import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import style from '../../scss/style.scss';

class Recipe extends Component {

  // componentDidMount() {
  //   if (this.props.recipesData.length > 0) {
  //     this.props.dispatch(getRandomRecipes(this.props.state, this.props.match.params.number));
  //   }
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.recipesData.length > 0 && this.props.recipesData !== nextProps.recipesData) {
  //     this.props.dispatch(getRandomRecipes(nextProps, this.props.match.params.number));
  //   }
  // }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    recipesData: PropTypes.array.isRequired
  }


  render() {
    return (
      <div>
        ETT RECEPT!!!!!
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    recipesData: state.recipesData
  };
}

export default connect(mapStateToProps)(Recipe);

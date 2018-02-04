import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRandomRecipes} from '../actions/actions';


class RecipeButtons extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }

  // componentDidMount() {
  //   this.props.dispatch();
  // }

  render() {
    return (
      <div className="button__container">
        <div className="button__item-wrapper">
          <button className="button__item" onClick={() => this.props.dispatch(getRandomRecipes(this.props.state, 3))}>3</button>
          <button className="button__item" onClick={() => this.props.dispatch(getRandomRecipes(this.props.state, 5))}>5</button>
          <button className="button__item" onClick={() => this.props.dispatch(getRandomRecipes(this.props.state, 6))}>6</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomRecipesData: state.randomRecipesData,
    state: state
  }
};


export default connect(mapStateToProps)(RecipeButtons);

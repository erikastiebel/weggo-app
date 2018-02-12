import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserWithEmailAndPassword } from '../actions/actions';


class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }


  render() {
    return (
      <form id="login-form" className="login-form" name="userLogin" role="form">
      <fieldset form="login-form">
          <input type="email" name="email" placeholder="E-post" id="email" className="login-form__email"/>
          <input type="password" name="password" placeholder="Lösenord" id="password" className="login-form__password"/>
          <button type="button" id="logIn" className="login-form__button" onClick={() => this.props.dispatch(loginUserWithEmailAndPassword(this.props.state, document.getElementById('email').value,document.getElementById('password').value))}>Logga in</button>
      </fieldset>
    </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
};


export default connect(mapStateToProps)(Login);

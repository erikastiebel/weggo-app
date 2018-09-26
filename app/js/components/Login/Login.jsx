import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserAction } from '../../actions/actions';

import style from './Login.scss';

class Login extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitMenuListHandler = this.submitMenuListHandler.bind(this);

  }

  inputChangeHandler = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({[name]: e.target.value});
  };

  submitMenuListHandler = e => {
    alert(this.state.email + ' & ' + this.state.password);
    if (e) e.preventDefault();
    this.props.dispatch(loginUserAction(
      this.state.email,
      this.state.password)
    );
    this.setState({ email: '', password: ''});
  }


  render() {
    return (
      <div className={style.login_form__container}>
        <h2>Logga in</h2>
        <form id="login-form" onSubmit={this.submitMenuListHandler} className={style.login_form} name="userLogin" role="form" action="post">
          <input id="email" className={style.login_form__email} onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="E-post" />
          <input id="password" className={style.login_form__password} onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Lösenord" />
          <input
            id="logIn"
            className={style.login_form__button}
            type="submit"
            value="Logga in"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
};

export default connect(mapStateToProps)(Login);

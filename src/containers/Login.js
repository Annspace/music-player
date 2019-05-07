import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { auth } = this.props;
    const { username, password } = this.state;
    auth({ username, password }, this.props.history);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    const { errorText } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <div>Username</div>
          <input type="text" name="username" onChange={this.onChange} value={username} />
          <div>Password</div>
          <input type="text" name="password" onChange={this.onChange} value={password} />
          <div>
            <button type="submit">
              Login
            </button>
          </div>
        </form>
        {errorText.length > 0 ? <div>{errorText}</div> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticating: state.authUser.authenticating,
  authenticated: state.authUser.authenticated,
  errorText: state.authUser.errorText,
});
const mapDispatchToProps = dispatch => ({
  auth: (values, history) => dispatch(login(values, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

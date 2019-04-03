import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        {
          this.props.error &&
          <p style={{ color: 'red' }}>{this.props.error}</p>
        }

        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={this.props.email} onChange={this.props.onEmailChange} />

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={this.props.password} onChange={this.props.onPasswordChange} />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

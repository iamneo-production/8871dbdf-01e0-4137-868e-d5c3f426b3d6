import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: 'Please fill in all fields' });
    } else {
      // Perform your login logic here
      console.log('Logging in...');
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label>Email Address</label>
          <input
            type="email" required
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password" required
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">Password?</a>
        </p>
      </form>
    );
  }
}

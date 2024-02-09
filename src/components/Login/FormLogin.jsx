import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class FormLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NombreUsuario: this.state.username,
          Contraseña: this.state.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      this.setState({ loggedIn: true });
    } catch (error) {
      console.error(error);
      this.setState({ error: true });
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>

        {this.state.error && <p>Error: Credenciales inválidas</p>}
      </div>
    );
  }
}

export default FormLogin;

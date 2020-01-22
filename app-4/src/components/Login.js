import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLogin = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    return (
      <div>
        <h5>Login Page</h5>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="username"
        />
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
          placeholder="password"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
export default Login;

// import React, { Component } from "react";

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: ""
//     };
//     this.alertLogin = this.alertLogin.bind(this);
//   }
//   updateUsername(name) {
//     this.setState({ username: name });
//   }
//   updatePassword(pass) {
//     this.setState({ password: pass });
//   }
//   alertLogin() {
//     alert(`Username: ${this.state.username} Password: ${this.state.password}`);
//   }

//   render() {
//     return (
//       <div>
//         <h4>Login Page</h4>
//         <input onChange={e => this.updateUsername(e.target.value)} />
//         <input onChange={e => this.updatePassword(e.target.value)} />
//         <button onClick={this.alertLogin}>Login</button>
//       </div>
//     );
//   }
// }

import React from "react";
import { Button } from "antd";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin = () => {
    this.props.login();
  };
  render() {
    return (
      <div onClick={() => this.onLogin()}>
        Login
        <Button>Login</Button>
      </div>
    );
  }
}

export default LoginComponent;

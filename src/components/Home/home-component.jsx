import React from "react";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin = () => {
    this.props.login();
  }
  render() {
    return (
			<div>Home <p>
			{this.props.id}
			</p></div>
		);
  }
}

export default HomeComponent;
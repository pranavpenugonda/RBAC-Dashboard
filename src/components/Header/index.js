import React, { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>RBAC Dashboard</h1>
        <nav>
          <button onClick={() => this.props.setView("users")}>Users</button>
          <button onClick={() => this.props.setView("roles")}>Roles</button>
          <button onClick={() => this.props.setView("permissions")}>
            Permissions
          </button>
        </nav>
      </header>
    );
  }
}

export default Header;

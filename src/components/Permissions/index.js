import React, { Component } from "react";
import "./index.css";

class Permissions extends Component {
  render() {
    const { permissions, updatePermission } = this.props;

    return (
      <div className="permissions">
        <h2>Permissions</h2>
        <ul>
          {permissions.map((perm, index) => (
            <li key={index}>
              <strong>{perm.name}</strong>:{" "}
              {perm.enabled ? "Enabled" : "Disabled"}{" "}
              <button onClick={() => updatePermission(index)}>Toggle</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Permissions;

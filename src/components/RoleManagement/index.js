import React, { Component } from "react";
import "./index.css";

class RoleManagement extends Component {
  render() {
    const { roles, addRole, deleteRole, editRole } = this.props;

    return (
      <div className="role-management">
        <h2>Role Management</h2>
        <button onClick={addRole}>Add Role</button>
        <ul>
          {roles.map((role, roleIndex) => (
            <li key={roleIndex}>
              <strong>{role.name}</strong>
              <ul>
                <li>Users: {role.permissions.users ? "Yes" : "No"}</li>
                <li>Roles: {role.permissions.roles ? "Yes" : "No"}</li>
                <li>
                  Permissions: {role.permissions.permissions ? "Yes" : "No"}
                </li>
                <li>Read: {role.permissions.Read ? "Yes" : "No"} </li>
                <li>Write: {role.permissions.Write ? "Yes" : "No"} </li>
                <li>Execute: {role.permissions.Execute ? "Yes" : "No"} </li>
              </ul>
              <button onClick={() => editRole(roleIndex)}>Edit Role</button>
              <button onClick={() => deleteRole(roleIndex)}>Delete Role</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RoleManagement;

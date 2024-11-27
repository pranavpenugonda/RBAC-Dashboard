import React, { Component } from "react";
import "./index.css";

class UserManagement extends Component {
  handleSearch = (e) => {
    this.props.searchUsers(e.target.value);
  };

  handleFilter = (e) => {
    this.props.filterUsersByRole(e.target.value);
  };

  render() {
    const {
      users,
      addUser,
      deleteUser,
      toggleUserStatus,
      editUser,
      sortUsers,
      roles,
    } = this.props;

    return (
      <div className="user-management">
        <h2>User Management</h2>
        <div className="additional-functionality">
          <button onClick={addUser}>Add User</button>
          <button onClick={sortUsers}>Sort Alphabetically</button>
          <input
            type="text"
            placeholder="Search users..."
            onChange={this.handleSearch}
          />
          <select onChange={this.handleFilter}>
            <option value="">Filter by Role</option>
            {roles.map((role, index) => (
              <option key={index} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <ul>
          {users.length > 0 ? (
            users.map((user, index) => (
              <li key={index}>
                <span>
                  {user.name} - {user.role} -{" "}
                  {user.active ? "Active" : "Inactive"}
                </span>
                <button onClick={() => toggleUserStatus(index)}>
                  Toggle Status
                </button>
                <button onClick={() => editUser(index)}>Edit</button>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </li>
            ))
          ) : (
            <li>No users available.</li>
          )}
        </ul>
      </div>
    );
  }
}

export default UserManagement;

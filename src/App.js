import React, { Component } from "react";
import Header from "./components/Header";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import Permissions from "./components/Permissions";
import "./App.css";

class App extends Component {
  state = {
    loggedInUser: null, // Store selected user
    users: [
      { name: "Alice", role: "Admin", active: true },
      { name: "Bob", role: "Editor", active: true },
      { name: "Charlie", role: "Viewer", active: true },
    ],
    roles: [
      {
        name: "Admin",
        permissions: {
          users: true,
          roles: true,
          permissions: true,
          Read: true,
          Write: true,
          Execute: true,
        },
      },
      {
        name: "Editor",
        permissions: {
          users: true,
          roles: false,
          permissions: false,
          Read: true,
          Write: false,
          Execute: false,
        },
      },
      {
        name: "Viewer",
        permissions: {
          users: false,
          roles: false,
          permissions: false,
          Read: false,
          Write: false,
          Execute: false,
        },
      },
    ],
    permissions: [
      { name: "Read", enabled: true },
      { name: "Write", enabled: false },
      { name: "Execute", enabled: true },
    ],
    view: "users", // Current view: "users", "roles", or "permissions"
    filterRole: "", // Filter value for roles
    searchQuery: "", // Search query
  };

  loginUser = (user) => {
    this.setState({ loggedInUser: user });
  };

  setView = (view) => {
    this.setState({ view });
  };

  canManage = (section) => {
    const { loggedInUser, roles } = this.state;
    const role = roles.find((r) => r.name === loggedInUser?.role);
    return role?.permissions[section];
  };

  addUser = () => {
    if (this.canManage("users")) {
      const name = prompt("Enter user name:");
      const role = prompt("Enter user role:");

      if (name && role) {
        this.setState((prevState) => {
          // Add the new user
          const users = [...prevState.users, { name, role, active: true }];

          // Check if the role already exists, if not, add it
          const roleExists = prevState.roles.some((r) => r.name === role);
          const roles = roleExists
            ? prevState.roles
            : [
                ...prevState.roles,
                {
                  name: role,
                  permissions: { Read: false, Write: false, Execute: false },
                },
              ];

          return { users, roles };
        });
      }
    } else {
      alert("You do not have permission to manage users.");
    }
  };

  deleteUser = (index) => {
    this.setState((prevState) => {
      const users = [...prevState.users];
      users.splice(index, 1);
      return { users };
    });
  };

  editUser = (index) => {
    const name = prompt("Enter new user name:", this.state.users[index].name);
    const role = prompt("Enter new user role:", this.state.users[index].role);
    if (name && role) {
      this.setState((prevState) => {
        const users = [...prevState.users];
        users[index] = { ...users[index], name, role };
        return { users };
      });
    }
  };

  toggleUserStatus = (index) => {
    this.setState((prevState) => {
      const updatedUsers = prevState.users.map((user, i) => {
        if (i === index) {
          return { ...user, active: !user.active };
        }
        return user;
      });
      return { users: updatedUsers };
    });
  };

  sortUsers = () => {
    this.setState((prevState) => {
      const sortedUsers = [...prevState.users].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return { users: sortedUsers };
    });
  };

  filterUsersByRole = (role) => {
    this.setState({ filterRole: role });
  };

  searchUsers = (query) => {
    this.setState({ searchQuery: query });
  };

  addRole = () => {
    const name = prompt("Enter role name:");
    if (name) {
      this.setState((prevState) => ({
        roles: [
          ...prevState.roles,
          { name, permissions: { Read: false, Write: false, Execute: false } },
        ],
      }));
    }
  };

  editRole = (index) => {
    const name = prompt("Enter new role name:", this.state.roles[index].name);
    const permissions = { ...this.state.roles[index].permissions };

    for (let perm in permissions) {
      const value = prompt(
        `Enable ${perm} permission? (yes/no)`,
        permissions[perm] ? "yes" : "no"
      );
      permissions[perm] = value.toLowerCase() === "yes";
    }

    if (name) {
      this.setState((prevState) => {
        const roles = [...prevState.roles];
        roles[index] = { name, permissions };
        return { roles };
      });
    }
  };

  deleteRole = (index) => {
    this.setState((prevState) => {
      const roles = [...prevState.roles];
      roles.splice(index, 1);
      return { roles };
    });
  };

  updatePermission = (permissionIndex) => {
    this.setState((prevState) => {
      // Create a deep copy of the permissions array
      const permissions = prevState.permissions.map((perm, index) =>
        index === permissionIndex
          ? { ...perm, enabled: !perm.enabled } // Toggle the specific permission
          : perm
      );

      // Update roles based on the changed permission
      const permissionName = permissions[permissionIndex].name;
      const roles = prevState.roles.map((role) => ({
        ...role,
        permissions: {
          ...role.permissions,
          [permissionName]: permissions[permissionIndex].enabled,
        },
      }));

      return { permissions, roles }; // Update both permissions and roles in state
    });
  };

  renderView = () => {
    const {
      view,
      users,
      roles,
      permissions,
      filterRole,
      searchQuery,
    } = this.state;

    const filteredUsers = users.filter(
      (user) =>
        (!filterRole || user.role === filterRole) &&
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!this.state.loggedInUser) {
      return (
        <div>
          <h2>Select a User to Log In</h2>
          <ul className="users-list">
            {this.state.users.map((user, index) => (
              <li key={index} className="user-item">
                <button onClick={() => this.loginUser(user)}>
                  {user.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    switch (view) {
      case "users":
        if (this.canManage("users")) {
          return (
            <UserManagement
              users={filteredUsers}
              addUser={this.addUser}
              deleteUser={this.deleteUser}
              editUser={this.editUser}
              toggleUserStatus={this.toggleUserStatus}
              sortUsers={this.sortUsers}
              searchUsers={this.searchUsers}
              filterUsersByRole={this.filterUsersByRole}
              roles={roles}
            />
          );
        } else {
          return <h3>You do not have permission to manage users</h3>;
        }
      case "roles":
        if (this.canManage("roles")) {
          return (
            <RoleManagement
              roles={roles}
              addRole={this.addRole}
              editRole={this.editRole}
              deleteRole={this.deleteRole}
            />
          );
        } else {
          return <h3>You do not have permission to manage roles</h3>;
        }
      case "permissions":
        if (this.canManage("permissions")) {
          return (
            <Permissions
              permissions={permissions}
              updatePermission={this.updatePermission}
            />
          );
        } else {
          return <h3>You do not have permission to manage permissions</h3>;
        }
      default:
        return <h2>Invalid view</h2>;
    }
  };

  render() {
    return (
      <div className="App">
        <Header setView={this.setView} />
        <main>{this.renderView()}</main>
      </div>
    );
  }
}

export default App;

![image](https://github.com/user-attachments/assets/d54eaadc-0d2a-4368-8599-06d0bec652f7)# RBAC Dashboard using react.js

## RBAC (Role Based Access Control)

### setup instructions

1. clone this repo
2. run "npm install" to install all dependencies in package.json file
3. run "npm start" to view view application at `localhost:3000`

## project overview

The RBAC is a React-based web application designed to manage users, roles, and permissions efficiently. This application allows administrators to perform CRUD operations on users and roles, toggle user statuses, and manage role-based permissions dynamically. The system ensures real-time synchronization between roles and permissions, providing a seamless user experience.

### Features

## User Management

- Add, edit, and delete users. <br>
- Filter users by roles. <br>
- Search users by name.<br>
- Toggle user active/inactive status.<br>
- Sort users alphabetically.<br>

## Role Management

- Add, edit, and delete roles.<br>
- Assign permissions (Read, Write, Execute) to roles.<br>
- Toggle role-specific permissions dynamically.<br>

## Permissions Management

- View all permissions and their status (Enabled/Disabled).<br>
- Synchronize permission updates with roles.<br>
- Toggle permissions and reflect changes across all associated roles.<br>
- Synchronization<br>
- Real-time synchronization of permissions and roles.<br>
- Updates in the permissions view are immediately reflected in the roles view and vice versa.<br>

## features screenshots
![image](https://github.com/user-attachments/assets/1368ae59-2046-48fa-bbca-4685bad2de7a)
this is main page of application. Their are three views to show `users`, `roles`, `permissions`

- users: Displays the current available users (`alice, bob, charlie`)
- roles: Displays different roles that are present (`admin, editor, viewer etc`)
- permissions: Displays different permissions (`read, write, execute`)

select Alice user 
![image](https://github.com/user-attachments/assets/50d6374f-e8bf-4166-95c3-d8340466a2a9)

you can add user, sort existing users, search users, filter users by roles and also edit the usernames, roles and toggle the status of user from active to inactive and vice-versa and also delete the users.









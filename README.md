# RBAC Dashboard using react.js

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
- he is admin; he can manage users, roles, permissions
![image](https://github.com/user-attachments/assets/50d6374f-e8bf-4166-95c3-d8340466a2a9)

you can add user, sort existing users, search users, filter users by roles and also edit the usernames, roles and toggle the status of user from active to inactive and vice-versa and also delete the users.


### add functionality (added user mani)
![image](https://github.com/user-attachments/assets/24948d91-7b3c-48da-9073-9e706b6ab449)



### search functionality
![image](https://github.com/user-attachments/assets/c63affd6-cd7e-4b8a-a4cf-e7525a675ba8)


### filter functionality
![image](https://github.com/user-attachments/assets/8acf0e06-aaf9-4cdf-9cc8-e55d39f2d233)

### edit functionality
![image](https://github.com/user-attachments/assets/e1a5d300-00ad-47a4-8dcb-70bcd6069377)

### delete functionality (deleted bob user)
![image](https://github.com/user-attachments/assets/b97632ae-fbc6-42f8-a6ca-c928b020ed5d)

### click on roles
![image](https://github.com/user-attachments/assets/9d62272a-3902-454f-a970-c5094a8f9996)

you can add, edit and delete roles here

### click on permission
![image](https://github.com/user-attachments/assets/2bbee822-abec-406c-aaee-d15225597373)

read, write and execute permissions are visible here and you can toggle them and you can see status toggles from enabled to disabled and vice-versa. And all these changes are reflected back into the roles view.
- initially read is Enabled and i toggle it then it will become Disabled and roles view get updated accordingly
![image](https://github.com/user-attachments/assets/cb0c2cb8-7fa1-499b-8cab-d4953ef54b29)
- you can see read permissions of all roles are no; means reflected successfully.

### similaryly check for other users(bob)
- he is viewer means he has no access to manage users, roles, permissions
![image](https://github.com/user-attachments/assets/79abf324-12dc-4704-8cba-abc15ccaac4a)
- he is editor and can edit the user permissions and can't edit roles and permissions
  ![image](https://github.com/user-attachments/assets/80819681-3430-4c62-87c2-3c6af35ced1e)
  ![image](https://github.com/user-attachments/assets/f12f3195-31d0-4689-9a33-b8f796ecfb02)

### similaryly check for other users(charlie)
![image](https://github.com/user-attachments/assets/a979391f-2788-4492-a78c-e7652056d986)
![image](https://github.com/user-attachments/assets/a63e15a0-18f7-4d6e-8a77-8bb5dab30779)
![image](https://github.com/user-attachments/assets/9c472e85-c8ce-490c-b1fb-5e73a37971d0)



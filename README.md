# Demo Project: Full-Stack Application with NestJS and Angular 18

Welcome to the demo project repository! This project demonstrates a full-stack application built with NestJS for the backend and Angular 18 for the frontend. The application includes user management functionalities such as creating, updating, reading, and deleting users, as well as user authentication with roles.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Frontend Application](#frontend-application)

## Features

### Backend (NestJS)

- User Authentication (Login/Register)
- User CRUD Operations
  - Create User
  - Update User
  - Read All Users
  - Read One User
  - Delete User
- Role Management

### Frontend (Angular 18)

- Login and Registration Forms
- User Dashboard
- Role-based Access Control
- Connection to Backend via HTTP Client

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Angular CLI (v12.x or higher)

## API Endpoints

### Authentication

- `POST /users/login`: User login
- `POST /users`: User registration

### Users

- `GET /users`: Get all users
- `GET /users/:id`: Get user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update user by ID
- `DELETE /users/:id`: Delete user by ID

## Frontend Application

### User Authentication

- **Login Form**: Located at `/login`
- **Registration Form**: Located at `/register`

### User Dashboard

- **View All Users**: Available for authenticated users
- **User Details**: View detailed information about a specific user

### Role-Based Access Control

- **Admin Role**: Access to create, update, and delete users
- **User Role**: Access to view personal details and update profile

---

Feel free to explore the codebase and provide feedback or suggestions. Happy coding!

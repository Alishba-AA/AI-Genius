# AI-Genius

## Project Description

The AI-Genius backend application is secure and uses Node.js, Express.js, JSON Web Tokens (JWT), and Role-Based Access Control (RBAC). The system simulates a SaaS platform that provides AI-powered services to users with different subscription levels.

The project illustrates authentication, authorization, token management and secure API access, following modern web security practices.

---

## Features

### Authentication

Posting user logins with email and password
bcryptjs is a library for hashing passwords.
Create JWT Access Token.
Expertise in JWT Refresh Token generation.Knowledge of JWT Refresh Token generation.
* Secure token verification

### Authorization

* Protected API routes
We will be discussing the following areas in this module:This module will cover the following topics:
* Three user roles:

  * Admin
  * Premium_User
  * Free_User

### Security

* Hashed passwords
* JWT-based authentication
Using dotenv for environment variable management.
* Centralized error handling

---

## Project Structure

```text
AI-Genius
│
├── db
│   └── users.js
│
├── middleware
│   ├── protect.js
│   └── restrictTo.js
│
├── routes
│   ├── authRoutes.js
│   └── aiRoutes.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## Technologies Used

* Node.js
* Express.js
* JWT (jsonwebtoken)
* bcryptjs
* cookie-parser
* dotenv
* cors
* nodemon

---

## API Endpoints

### Authentication Routes

#### Login

```http
POST /api/auth/login
```

Returns:

* Access Token
* Refresh Token Cookie

---

#### Refresh Token

```http
POST /api/auth/refresh
```

Generates a new Access Token that is based on an existing Refresh Token.

---

### AI Routes

#### Free Model

```http
GET /api/ai/free-model
```

Accessible by:

* Admin
* Premium_User
* Free_User

---

#### Premium Model

```http
POST /api/ai/premium-model
```

Accessible by:

* Admin
* Premium_User

---

#### Purge Cache

```http
DELETE /api/ai/purge-cache
```

Accessible by:

* Admin only

---

## User Roles

| Role         | Free Model | Premium Model | Purge Cache |
| ------------ | ---------- | ------------- | ----------- |
| Admin        | Yes        | Yes           | Yes         |
| Premium_User | Yes        | Yes           | No          |
| Free_User    | Yes        | No            | No          |

---

## Authentication Workflow

User logs in with email and password.
2. Server verifies credentials.
3. Access Token is created and sent back.
Secure storage of 4. Refresh Token.
The protected APIs need an Access Token.
When the Access Token expires, it uses the Refresh Token to get a new Access Token.
7. RBAC middleware performs access checks on user permissions.

---

## Security Measures

Generate a bcryptjs hash for the password.Create a bcryptjs password hash.
* JWT authentication
* Refresh token mechanism
* Protected routes
* Role-Based Access Control
* Environment variable protection
* Centralized error handling

---

## Workflow Demonstration

The repository includes screen shots that show:

The login and access token generation process.The login and access token generation process.
* Access Protected API
* Premium Role Access
* Admin Role Access
* Refresh Token Usage
* Access Denied (RBAC)
* Unauthorized Access Handling

---

## Environment Variables

Make a .env file with the following template:

```env
PORT=5000
JWT_SECRET=your_secret_key
ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d
```

# Backend Practice Project

This repository contains a backend project built for practice and learning purposes.  
The main goal is to improve backend fundamentals, API design, authentication, and overall code structure.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- JWT for authentication
- bcrypt for password hashing

## Features

- RESTful API structure
- User authentication (JWT based)
- Environment variable configuration
- Modular folder structure
- Error handling and validation
- Scalable backend setup

## Project Structure
backend/
│
├── src/                    # Source code
│   ├── config              # App configuration
│   ├── controllers         # Request handlers
│   ├── middlewares         # Custom middlewares
│   ├── models              # Database models
│   ├── routes              # API routes
│   ├── utils               # Utility functions
│   ├── app.ts              # Express app setup
│   └── server.ts           # Server entry point
│
├── .env.example            # Sample environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md




## Get Started

### 1. Clone the Repository

```bash
git clone https://github.com/jvkedev/backend-practice.git

```
### 2. Navigate to the project directory

```
cd backend-practice
```

### 3. Install Dependencies

```
npm install
```

### 4. Create .env file
```
PORT=5000
MONGO_URL=

# JWT SECRET
JWT_SECRET=
JWT_EXPIRES_IN=

# Email sender
EMAIL_USER=
EMAIL_PASS=

```

## Usage
### 1. Start the development server

```
npm run dev
```

## Author

JvkeDev

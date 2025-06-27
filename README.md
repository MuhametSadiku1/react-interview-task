# React Interview Task

This project contains a full-stack application with a Next.js frontend and a Node.js/Express backend.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started

### 1. Install dependencies

Open a terminal in the project root and run:

```
cd backend
npm install
cd ../frontend
npm install
```

### 2. Run the backend server

In a terminal, run:

```
cd backend
npm run dev
```

The backend will start on [http://localhost:5500](http://localhost:5500).

### 3. Run the frontend (Next.js) app

Open a new terminal and run:

```
cd frontend
npm run dev
```

The frontend will start on [http://localhost:3000](http://localhost:3000).

## Usage

- Visit [http://localhost:3000](http://localhost:3000) in your browser.
- The app will connect to the backend automatically.

## Project Structure

- `backend/` - Node.js/Express API
- `frontend/` - Next.js React app

---

## Q&A

### How might you make this app more secure?

- Use environment variables for sensitive configuration (e.g., database credentials, API keys).
- Implement authentication and authorization (e.g., JWT, OAuth) to restrict access to API endpoints and UI features.
- Validate and sanitize all user input on both frontend and backend to prevent XSS and injection attacks.
- Use HTTPS in production to encrypt data in transit.
- Keep dependencies up to date and monitor for vulnerabilities.
- Implement rate limiting and logging on the backend to detect and prevent abuse.

### How would you make this solution scale to millions of records?

- Use a production-grade database (e.g., PostgreSQL, MongoDB) with proper indexing for efficient queries.
- Implement server-side pagination, filtering, and searching to avoid loading all records at once.
- Use caching (e.g., Redis, CDN) for frequently accessed data.
- Deploy the backend and frontend using scalable infrastructure (e.g., Docker, Kubernetes, cloud services).
- Optimize frontend rendering (e.g., virtualization for large tables/lists).

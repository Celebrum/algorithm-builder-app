# Installation Guide

## Prerequisites
- Node.js 16+ 
- Docker and Docker Compose (optional)
- PostgreSQL (if not using Docker)
- Redis (if not using Docker)

## Local Development Setup
1. Install dependencies:
```bash
npm install
```

2. Create .env file (use .env.example as template)

3. Start the application:
```bash
npm run dev
```

## Docker Setup (Recommended)
1. Build and start all services:
```bash
npm run docker:build
npm run docker:up
```

Access the application at http://localhost:3000

## Installing mathjs
1. Add mathjs to the project's dependencies in `package.json`:
```bash
npm install mathjs
```

2. Import mathjs in the relevant files where you want to use it, such as `src/index.js` or `public/mathHandler.js`:
```javascript
const math = require('mathjs');
```

require('dotenv').config();
const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const Redis = require('redis');
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './components/App';
import { initPhiFramework } from '@phi-framework/core';

const app = express();
const port = process.env.PORT || 3000;

// Database setup
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Redis setup
const redisClient = Redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

initPhiFramework();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

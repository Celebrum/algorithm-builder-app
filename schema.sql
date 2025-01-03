CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE algorithms (
    algorithm_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    complexity_notation VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER REFERENCES users(user_id)
);

CREATE TABLE algorithm_steps (
    step_id SERIAL PRIMARY KEY,
    algorithm_id INTEGER REFERENCES algorithms(algorithm_id),
    step_number INTEGER NOT NULL,
    description TEXT NOT NULL,
    code_snippet TEXT,
    visualization_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_progress (
    progress_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    algorithm_id INTEGER REFERENCES algorithms(algorithm_id),
    completed_steps INTEGER DEFAULT 0,
    is_completed BOOLEAN DEFAULT FALSE,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, algorithm_id)
);

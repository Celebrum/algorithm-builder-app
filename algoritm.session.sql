-- Active: 1734933721744@@127.0.0.1@5432@postgres
-- Connect to database
\c algorithm_builder_db

-- Insert sample algorithm
INSERT INTO algorithms (title, description, category, complexity_notation) 
VALUES (
    'Binary Search',
    'A searching algorithm that finds the position of a target value within a sorted array',
    'Searching',
    'O(log n)'
);

-- Insert sample algorithm steps
INSERT INTO algorithm_steps (algorithm_id, step_number, description, code_snippet) 
VALUES 
(1, 1, 'Initialize left and right pointers', 'let left = 0; let right = array.length - 1;'),
(1, 2, 'Find middle element', 'let mid = Math.floor((left + right) / 2);'),
(1, 3, 'Compare and adjust pointers', 'if (array[mid] === target) return mid;');

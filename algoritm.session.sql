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

-- Insert Golden Ratio Earth Rotation Algorithm
INSERT INTO algorithms (title, description, category, complexity_notation) 
VALUES (
    'Golden Ratio Earth Rotation Framework',
    'A mathematical framework incorporating the golden ratio (φ ≈ 1.618033988749895) into Earth''s rotational dynamics, showing 23.5% increased accuracy in atmospheric predictions',
    'Mathematical Physics',
    'O(n log φ)'
);

-- Insert implementation steps
INSERT INTO algorithm_steps (algorithm_id, step_number, description, code_snippet) 
VALUES 
(
    (SELECT id FROM algorithms WHERE title = 'Golden Ratio Earth Rotation Framework'),
    1,
    'Express Earth angular velocity using φ',
    'ω_phi = 7.2921E-5 * φ rad/s'
),
(
    (SELECT id FROM algorithms WHERE title = 'Golden Ratio Earth Rotation Framework'),
    2,
    'Calculate Coriolis force with φ substitution',
    'F_coriolis = 2m * ω_phi * v * sin(φ * latitude)'
),
(
    (SELECT id FROM algorithms WHERE title = 'Golden Ratio Earth Rotation Framework'),
    3,
    'Compute gyre dimensions ratio',
    'gyre_ratio = dimension_major / dimension_minor ≈ φ ± 0.02%'
),
(
    (SELECT id FROM algorithms WHERE title = 'Golden Ratio Earth Rotation Framework'),
    4,
    'Apply to geomagnetic field modeling',
    'B_field = B_0 * exp(-r/φ) * cos(ω_phi * t)'
);

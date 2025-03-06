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

-- Insert Neutrosophic Linear Model (NLM) Algorithm
INSERT INTO algorithms (title, description, category, complexity_notation) 
VALUES (
    'Neutrosophic Linear Model (NLM)',
    'A model that generalizes intuitionistic fuzzy logic to neutrosophic logic, allowing for the representation of truth, indeterminacy, and falsehood as subsets of the non-standard interval ]-0, 1+[.',
    'Mathematical Logic',
    'O(n)'
);

-- Insert NLM algorithm steps
INSERT INTO algorithm_steps (algorithm_id, step_number, description, code_snippet) 
VALUES 
(
    (SELECT id FROM algorithms WHERE title = 'Neutrosophic Linear Model (NLM)'),
    1,
    'Define Neutrosophic Components',
    'let T = {t1, t2, ..., tn}; let I = {i1, i2, ..., in}; let F = {f1, f2, ..., fn};'
),
(
    (SELECT id FROM algorithms WHERE title = 'Neutrosophic Linear Model (NLM)'),
    2,
    'Calculate Neutrosophic Truth Value',
    'let NLt(A) = (T, I, F);'
),
(
    (SELECT id FROM algorithms WHERE title = 'Neutrosophic Linear Model (NLM)'),
    3,
    'Implement Neutrosophic Logic Operations',
    'function neutrosophicNegation(A) { return { T: {1+} - A.T, I: {1+} - A.I, F: {1+} - A.F }; }'
),
(
    (SELECT id FROM algorithms WHERE title = 'Neutrosophic Linear Model (NLM)'),
    4,
    'Apply Neutrosophic Logic to Problem Solving',
    'let result = neutrosophicNegation(NLt(A));'
);

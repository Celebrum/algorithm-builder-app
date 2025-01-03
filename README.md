# Algorithm Builder App

## Installation Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Celebrum/algorithm-builder-app.git
   cd algorithm-builder-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to access the app.

### Video Tutorial
For a step-by-step guide on how to install the app, watch our [installation video tutorial](https://www.example.com/algorithm-builder-app-installation-tutorial).

## Usage Instructions

### Building an Algorithm
1. Drag and drop algorithm components from the palette onto the canvas.
2. Connect components with lines to define the flow of the algorithm.
3. Customize the properties and behavior of each component directly on the canvas.
4. Use the code generation feature to convert the visual representation into actual code.
5. Test and debug your algorithm within the app.

### Customizing Algorithm Templates
1. Select a pre-built algorithm template from the library.
2. Modify parameters, add or remove steps, and change the logic as needed.
3. Save and share your customized algorithm with others.

### Interactive Learning Platform
1. Access guided tutorials and exercises to learn about different algorithms.
2. Follow step-by-step explanations and visualizations of how each algorithm works.
3. Practice implementing algorithms and receive instant feedback.
4. Experiment with your own algorithm ideas in the sandbox environment.

## Troubleshooting Common Issues

### Installation Issues
- Ensure you have the correct versions of Node.js and npm installed.
- Check your internet connection and try running `npm install` again.
- If you encounter permission issues, try running the commands with `sudo`.

### Usage Issues
- If the app is not loading, ensure the development server is running and you are navigating to the correct URL.
- For drag-and-drop issues, try refreshing the page or clearing your browser cache.
- If you encounter errors in the generated code, use the debugging environment to identify and fix the issues.

## FAQ

### How do I reset my password?
To reset your password, click on the "Forgot Password" link on the login page and follow the instructions.

### How do I report a bug?
To report a bug, please visit our [support page](https://github.com/Celebrum/algorithm-builder-app/support) or contact us at support@algorithm-builder.com.

### Can I use the app offline?
No, the app requires an internet connection to function properly.

## Support
For further assistance, please visit our [support page](https://github.com/Celebrum/algorithm-builder-app/support) or contact us at support@algorithm-builder.com.

## Onboarding Wizard
The onboarding wizard guides users through the basic setup and usage of the app. It provides an interactive tutorial with clear instructions and tooltips for each key element, such as the palette, canvas, generate code button, and debug button. The onboarding wizard includes pre-built algorithm templates for quick customization, making it easier for beginners to get started with building algorithms.

## Accessibility Features
The app includes various accessibility features to ensure it is usable by people with disabilities. These features include high-contrast mode, screen reader compatibility, semantic HTML, ARIA attributes, and focus management.

## UI Customization
The app provides several UI customization options, such as zoom and pan functionalities in the canvas area and search functionality in the palette. Users can adjust the view of the canvas area and filter algorithm components easily.

## Algorithm Templates
The app includes pre-built algorithm templates that users can load and customize. These templates serve as examples and provide a quick start for building algorithms. Users can modify parameters, add or remove steps, and change the logic as needed.

## OAuth2 and OpenID Connect Authentication
The app supports OAuth2 and OpenID Connect authentication methods. Users can set up and configure these authentication methods to secure their accounts and access the app's features.

## Real-Time Feedback and Debugging Environment
The app provides a real-time feedback and debugging environment to help users test and debug their algorithms. The debug panel allows users to step through the execution of algorithms, view the current line of code, and inspect variable values.

## Full Documentation
For more detailed information on the app's features and usage, please refer to the full documentation file: [src/documentation.md](src/documentation.md).

## Docker Setup

### Building and Running the Docker Image

1. Build the Docker image:
   ```sh
   docker build -t algorithm-builder-app .
   ```

2. Run the Docker container:
   ```sh
   docker run -p 3000:3000 algorithm-builder-app
   ```

### Using Docker Compose

1. Create a `docker-compose.yml` file in the root directory with the following content:
   ```yaml
   version: '3'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env
       depends_on:
         - db
         - redis
         - nginx
         - prometheus
         - grafana
     db:
       image: postgres:13
       environment:
         POSTGRES_USER: yourusername
         POSTGRES_PASSWORD: yourpassword
         POSTGRES_DB: yourdatabase
       volumes:
         - pgdata:/var/lib/postgresql/data
     redis:
       image: redis:latest
       ports:
         - "6379:6379"
     nginx:
       image: nginx:latest
       ports:
         - "80:80"
       volumes:
         - ./nginx.conf:/etc/nginx/nginx.conf
     prometheus:
       image: prom/prometheus:latest
       ports:
         - "9090:9090"
       volumes:
         - ./prometheus.yml:/etc/prometheus/prometheus.yml
     grafana:
       image: grafana/grafana:latest
       ports:
         - "3001:3001"
       volumes:
         - grafana-data:/var/lib/grafana
   volumes:
     pgdata:
     grafana-data:
   ```

2. Build and run the Docker containers using Docker Compose:
   ```sh
   docker-compose up --build
   ```

### Setting Up Environment Variables

1. Create a `.env` file in the root directory with the following content:
   ```plaintext
   PORT=3000
   NODE_ENV=production
   DB_HOST=db
   DB_PORT=5432
   DB_USER=yourusername
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
   REDIS_HOST=redis
   REDIS_PORT=6379
   ```

### Handling Database Connections

1. Update your application code to use the environment variables for database connection details. For example, in `src/auth.js`:
   ```javascript
   const { Pool } = require('pg');
   const pool = new Pool({
     host: process.env.DB_HOST,
     port: process.env.DB_PORT,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME
   });
   ```

### Adding Redis, Nginx, and Monitoring Services

1. Add a Redis service to the `docker-compose.yml` file to handle caching and session management.
2. Add a reverse proxy service (e.g., Nginx) to the `docker-compose.yml` file to handle incoming requests and route them to the appropriate services.
3. Add a monitoring service (e.g., Prometheus and Grafana) to the `docker-compose.yml` file to monitor the application's performance and resource usage.

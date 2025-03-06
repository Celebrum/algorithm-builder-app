# Algorithm Builder App

A sophisticated algorithm visualization and development tool.

## Features

- **Core Functionality**
  - Interactive algorithm building interface
  - LaTeX mathematical expression rendering
  - Dynamic code generation
  - Step-by-step execution debugging
  - Real-time variable monitoring

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Mathematical Processing**: MathJax, mathjs
- **Infrastructure**: Docker, Nginx
- **Monitoring**: Prometheus, Grafana
- **Database**: PostgreSQL
- **Caching**: Redis

## Docker Services

- Web Application (Port 3000)
- PostgreSQL Database
- Redis Cache (Port 6379)
- Nginx Reverse Proxy (Port 80)
- Prometheus Metrics (Port 9090)
- Grafana Dashboard (Port 3001)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/algorithm-builder-app.git
```

2. Start the Docker containers:
```bash
docker-compose up -d
```

3. Access the application at `http://localhost:3000`

## Usage

1. **Mathematical Components**
   - Use the math panel to input LaTeX expressions
   - Leverage mathjs calculations for mathematical operations
   - Visualize mathematical functions

2. **Algorithm Building**
   - Drag and drop components from the palette
   - Connect components to create algorithms
   - Generate executable code automatically

3. **Debugging**
   - Step through execution
   - Monitor variable values
   - Analyze algorithm performance

4. **Neutrosophic Logic and Neutrosophic Linear Model**
   - Define Neutrosophic Components (T, I, F)
   - Implement Neutrosophic Logic Operations (negation, conjunction, disjunction, implication, equivalence)
   - Apply Neutrosophic Logic to problem solving

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

# Dockerfile for building and serving the Algorithm Builder App

# Stage 1: Build environment
FROM node:16-alpine AS builder
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json* ./

# Install dependencies with clean install
RUN npm ci --quiet

# Copy remaining source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production environment
FROM node:16-alpine
WORKDIR /app

# Copy package files and built assets from builder
COPY --from=builder /app/build ./build
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm ci --quiet --only=production

EXPOSE 3000

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["npm", "start"]

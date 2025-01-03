# Dockerfile for building and serving the Algorithm Builder App

# Stage 1: Build the app
FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:16
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1
CMD ["npm", "start"]

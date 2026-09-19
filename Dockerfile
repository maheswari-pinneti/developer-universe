# Multi-stage build for Frontend (React + Vite)
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Multi-stage build for Backend (Express + TypeScript)
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci
COPY backend/ ./
RUN npm run build

# Production Runner Image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Install NGINX to serve static frontend and proxy backend API
RUN apk add --no-network --no-cache || apk add --no-cache nginx supervisor

COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html
COPY --from=backend-builder /app/backend/dist /app/backend/dist
COPY --from=backend-builder /app/backend/package*.json /app/backend/

WORKDIR /app/backend
RUN npm ci --only=production

# Copy Nginx & Supervisor Config
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisord.conf

EXPOSE 80 5000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]

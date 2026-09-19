# ==========================================
# BUILD STAGE
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app

# Root workspace manifests
COPY package.json package-lock.json ./

# Workspace manifests
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json

# Deterministic installation from root lockfile
RUN npm ci

# Application source
COPY frontend ./frontend
COPY backend ./backend

# Build frontend
RUN npm run build --workspace=frontend

# Build backend
RUN npm run build --workspace=backend

# ==========================================
# PRODUCTION STAGE
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

RUN apk add --no-cache nginx supervisor

# Root workspace lockfile
COPY package.json package-lock.json ./

# Backend manifest
COPY backend/package.json backend/package.json

# Install only backend production dependencies
RUN npm ci \
  --omit=dev \
  --workspace=backend \
  --include-workspace-root=false

# Frontend production files
COPY --from=builder /app/frontend/dist \
  /usr/share/nginx/html

# Backend production files
COPY --from=builder /app/backend/dist \
  /app/backend/dist
COPY --from=builder /app/backend/package.json \
  /app/backend/package.json

# NGINX
COPY docker/nginx.conf \
  /etc/nginx/http.d/default.conf

# Supervisor
COPY docker/supervisord.conf \
  /etc/supervisord.conf

EXPOSE 80 5000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]

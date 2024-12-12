FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./

# Clean install dependencies
RUN npm ci

COPY . .

FROM base AS dev
CMD ["npm", "run", "dev"]
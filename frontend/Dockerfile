FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./

# Clean install dependencies
RUN npm ci

COPY . .

FROM base AS dev
CMD ["npm", "run", "dev"]

FROM base AS build
RUN npm run build

FROM build AS prod

RUN npm ci --only=production

COPY --from=build /app/dist ./

CMD ["npm", "run", "serve"]
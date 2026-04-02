FROM node:20-alpine

WORKDIR /app

CMD ["sh", "-lc", "npm ci && npm run build"]

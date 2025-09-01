FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm i --omit=dev
COPY src ./src
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "src/index.js"]

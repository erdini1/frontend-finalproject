FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html

# COPY --from=builder /app/dist .



# CMD ["nginx", "-g", "daemon off;"]



FROM node:16.14-alpine
WORKDIR /backend
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3001
RUN npx tsc
CMD ["npm", "start"]
# FROM node:16.14-alpine
# RUN apk add --no-cache docker-compose
# # Create a working directory
# WORKDIR /frontend

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the code
# COPY . .

# # Expose the app's port
# EXPOSE 3001

# # Compile the TypeScript code
# RUN npx tsc

# # Start the MySQL container
# RUN echo "version: '3.9'" > docker-compose.yml
# RUN echo "services:" >> docker-compose.yml
# RUN echo "  mysql:" >> docker-compose.yml
# RUN echo "    image: mysql:8.0.21" >> docker-compose.yml
# RUN echo "    environment:" >> docker-compose.yml
# RUN echo "      - MYSQL_ROOT_PASSWORD=senha-mysql" >> docker-compose.yml
# RUN echo "      - MYSQL_DATABASE=cashForce" >> docker-compose.yml
# RUN docker-compose up -d

# # Run the app
# CMD ["npm", "run", "dev"]


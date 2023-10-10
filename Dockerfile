FROM --platform=linux/amd64 node:lts-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install --production

# Copy the rest of the application code to the working directory
COPY src ./src

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]

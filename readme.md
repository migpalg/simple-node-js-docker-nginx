# Simple NodeJS app with Nginx reverse proxy

This Node.js app uses Nginx as a reverse proxy to handle incoming requests and route them to the appropriate container.
The app is containerized using Docker, which allows for easy deployment and scaling.

To run the app, first ensure that Docker is installed on your machine. Then, navigate to the project directory and run the following command:

```bash
docker-compose up -d
```

This will start the app and the Nginx reverse proxy. You can access the app by navigating to http://localhost:4000 in your web browser.

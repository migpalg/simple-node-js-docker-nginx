const express = require("express");
const { config } = require("./core/config");

/**
 * Entry point of the application
 */
function main() {
  const app = express();
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send({
      hostname: process.env.HOSTNAME,
      timestamp: Date.now(),
      from: "digitalocean",
    });
  });

  app.use("/api", router);

  app.listen(config.server.port, () => {
    console.log(`listening on *:${config.server.port}`);
  });
}

main();

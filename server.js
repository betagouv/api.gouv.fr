const express = require("express");
const next = require("next");
const { join } = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/:apiId", (req, res) => {
    return app.render(req, res, "/api", {
      apiId: req.params.apiId
    });
  });

  server.use(express.static(join(__dirname, "dist")));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

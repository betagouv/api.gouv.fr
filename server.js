const { join } = require("path");
const express = require("express");
const next = require("next");
const { keyBy } = require("lodash")
const morgan = require("morgan")
const { buildDataset } = require('./build-dataset')

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();
  const { summary, apis, services } = await buildDataset()
  const apisIndex = keyBy(apis, 'slug')
  const servicesIndex = keyBy(services, 'slug')

  if (process.env.NODE_ENV !== 'production') {
    server.use(morgan('dev'))
  }

  server.get("/apis/:apiId.json", (req, res) => {
    if (req.params.apiId in apisIndex) {
      return res.send(apisIndex[req.params.apiId])
    }

    res.sendStatus(404)
  })

  server.get("/services/:serviceId.json", (req, res) => {
    if (req.params.serviceId in servicesIndex) {
      return res.send(servicesIndex[req.params.serviceId])
    }

    res.sendStatus(404)
  })

  server.get("/api.json", (req, res) => {
    res.send(summary)
  })

  server.get("/api/:apiId", (req, res) => {
    return app.render(req, res, "/api", {
      apiId: req.params.apiId
    });
  });

  server.get("/apropos", (req, res) => {
    return app.render(req, res, "/about");
  });


  server.use(express.static(join(__dirname, "public")));

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

const { join } = require('path');
const express = require('express');
const next = require('next');
const { keyBy } = require('lodash');
const morgan = require('morgan');
const { buildDataset } = require('./build-dataset');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function buildAliasesIndex(items) {
  return items.reduce((aliasesIndex, item) => {
    if (item.aliases) {
      item.aliases.forEach(alias => {
        aliasesIndex[alias] = item;
      });
    }

    return aliasesIndex;
  }, {});
}

app.prepare().then(async () => {
  const server = express();
  const { summary, apis, services } = await buildDataset();
  const apisIndex = keyBy(apis, 'slug');
  const servicesIndex = keyBy(services, 'slug');
  const apisAliasesIndex = buildAliasesIndex(apis);

  if (process.env.NODE_ENV !== 'production') {
    server.use(morgan('dev'));
  }

  server.get('/apis/:apiId.json', (req, res) => {
    if (req.params.apiId in apisIndex) {
      return res.send(apisIndex[req.params.apiId]);
    }

    res.sendStatus(404);
  });

  server.get('/services/:serviceId.json', (req, res) => {
    if (req.params.serviceId in servicesIndex) {
      return res.send(servicesIndex[req.params.serviceId]);
    }

    res.sendStatus(404);
  });

  server.get('/api/v1/api.json', (req, res) => {
    res.send(summary);
  });

  server.get('/api/:apiId', (req, res) => {
    const { apiId } = req.params;

    // Support des anciennes URL finissant par .html
    if (apiId.endsWith('.html')) {
      return res.redirect('/api/' + apiId.substring(0, apiId.indexOf('.html')));
    }

    // Alias
    if (apiId in apisAliasesIndex) {
      return res.redirect('/api/' + apisAliasesIndex[apiId].slug);
    }

    return app.render(req, res, '/api', { apiId });
  });

  server.get('/services/all', (req, res) => {
    res.send(services);
  });

  server.get('/service/:serviceId', (req, res) => {
    const { serviceId } = req.params;

    // Support des anciennes URL finissant par .html
    if (serviceId.endsWith('.html')) {
      return res.redirect(
        '/service/' + serviceId.substring(0, serviceId.indexOf('.html'))
      );
    }

    return app.render(req, res, '/service', { serviceId });
  });

  server.get('/apropos', (req, res) => {
    return app.render(req, res, '/about');
  });

  server.use(express.static(join(__dirname, 'public')));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

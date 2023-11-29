module.exports = {
  async redirects() {
    return [
      {
        source: '/les-api',
        destination: '/rechercher-api',
        permanent: true,
      },
      {
        source: '/signup/api',
        destination: '/datapass/api',
        permanent: true,
      },
      {
        source: '/les-api/nomenclatures_v1',
        destination: '/les-api/api-metadonnees-insee',
        permanent: true,
      },
      {
        source: '/producteurs/acoss',
        destination: '/producteurs/urssaf',
        permanent: true,
      },
      {
        source: '/producteurs/eau-france',
        destination: '/producteurs/eaufrance',
        permanent: true,
      },
      {
        source: '/les-api/api_indemnites_journalieres_cnam',
        destination: '/les-api/api-indemnites-journalieres-cnam',
        permanent: true,
      },
      {
        source: '/les-api/api_cartobio_territoires',
        destination: 'https://www.data.gouv.fr/fr/datasets/616d6531c2951bbe8bd97771/',
        permanent: true,
      }
    ];
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

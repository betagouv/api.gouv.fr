import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import prune from "underscore.string/prune";

import getConfig from "next/config";

const {
  publicRuntimeConfig: { SITE_NAME, SITE_URL }
} = getConfig();

const Meta = ({ title, description }) => {
  description = prune(description, 160, "…");
  return (
    <Head>
      {title ? (
        <title>
          {title} - {SITE_NAME}
        </title>
      ) : (
        <title>{SITE_NAME}</title>
      )}

      {/* Search Engine */}
      <meta name="description" content={description} />
      <meta name="image" content="/static/images/logo.svg" />

      {/* Schema.org for Google */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta
        name="og:title"
        content={title ? `${title} - ${SITE_NAME}` : SITE_NAME}
      />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="/static/images/logo.svg" />
      <meta name="og:url" content={SITE_URL} />
      <meta name="og:site_name" content={SITE_NAME} />
      <meta name="og:locale" content="fr_FR" />
      <meta name="og:type" content="website" />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Meta.defaultProps = {
  title: null,
  description: "Un accès unique aux API de l’État"
};

export default Meta;

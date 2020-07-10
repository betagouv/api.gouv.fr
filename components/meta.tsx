import React from 'react';
import Head from 'next/head';

//@ts-ignore
import prune from 'underscore.string/prune';

import { NextSeo } from 'next-seo';

interface IProps {
  title: string;
  description?: string;
  noIndex?: boolean;
  canonical?: string;
}

const Meta: React.FC<IProps> = ({
  title,
  description,
  noIndex = false,
  canonical,
}) => {
  description = prune(description, 160, '…');

  const SITE_NAME = 'api.gouv.fr';
  const SITE_URL = process.env.SITE_URL || 'https://api.gouv.fr';
  const SITE_DESCRIPTION =
    'Simplifiez le partage et la circulation des données administratives';

  return (
    <>
      <NextSeo
        title={title || SITE_NAME}
        description={description || SITE_DESCRIPTION}
        canonical={canonical}
        openGraph={{
          url: SITE_URL,
          locale: 'fr_FR',
          title: title || SITE_NAME,
          description: description || SITE_DESCRIPTION,
          images: [
            {
              url: '/images/linkedin.jpg',
              width: 1200,
              height: 627,
              alt: 'api.gouv.fr',
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Head>
        <title>
          {title ? title + ' - ' : ''}
          {SITE_NAME}
        </title>

        {/* custom no index as NextSEO noindex was broken */}
        {noIndex && (
          <>
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
          </>
        )}

        {/* Search Engine */}
        <meta name="description" content={description || SITE_DESCRIPTION} />
        <meta name="image" content="/images/api.gouv.fr.svg" />

        {/* Schema.org for Google */}
        <meta itemProp="name" content={title || SITE_NAME} />
        <meta
          itemProp="description"
          content={description || SITE_DESCRIPTION}
        />
      </Head>
    </>
  );
};

export default Meta;

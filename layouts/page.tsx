import React from 'react';

import { Footer, PreFooter, Header, Meta } from '../components';

interface IProps {
  title: string;
  description?: string;
  headerKey?: string;
  usePreFooter?: boolean;
  useFooter?: boolean;
  preFooterBackground?: string;
  useMenu?: boolean;
  noIndex?: boolean;
  canonical?: string;
}

const Page: React.FC<IProps> = ({
  title,
  description,
  headerKey,
  usePreFooter = true,
  useFooter = true,
  useMenu = true,
  noIndex = false,
  preFooterBackground,
  canonical,
  children,
}) => (
  <div id="page-layout">
    <Meta
      title={title}
      description={description}
      noIndex={noIndex}
      canonical={canonical}
    />
    <Header headerKey={headerKey || 'home'} useMenu={useMenu} />
    <main>{children}</main>
    {usePreFooter && <PreFooter background={preFooterBackground} />}
    {useFooter && <Footer />}
  </div>
);

export default Page;

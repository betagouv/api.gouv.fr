import React from 'react';

import { Footer, PreFooter, Header, Meta } from '../components';

const Page = ({
  title,
  description,
  headerKey,
  usePreFooter = true,
  preFooterBackground,
  children,
}) => (
  <div id="page-layout">
    <Meta title={title} description={description} />
    <Header headerKey={headerKey || 'home'} />
    <main>{children}</main>
    {usePreFooter && <PreFooter background={preFooterBackground} />}
    <Footer />
  </div>
);

export default Page;

import React from 'react';

import { Footer, PreFooter, Header, Meta } from '../components';

interface IProps {
  title: string;
  description?: string;
  headerKey?: string;
  usePreFooter?: boolean;
  preFooterBackground?: string;
}

const Page: React.FC<IProps> = ({
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

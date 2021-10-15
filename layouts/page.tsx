import React from 'react';

import { Footer, PreFooter, Header, Meta, DocHeader } from '../components';
import { Question } from '../uiComponents/question';

interface IProps {
  title: string;
  description?: string;
  headerKey?: string;
  usePreFooter?: boolean;
  useFooter?: boolean;
  preFooterBackground?: string;
  useDocHeader?: boolean;
  noIndex?: boolean;
  canonical?: string;
}

const Page: React.FC<IProps> = ({
  title,
  description,
  headerKey,
  usePreFooter = true,
  useFooter = true,
  useDocHeader = false,
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
    {useDocHeader ? <DocHeader /> : <Header headerKey={headerKey || 'home'} />}
    <main>{children}</main>
    <Question />
    {usePreFooter && <PreFooter background={preFooterBackground} />}
    {useFooter && <Footer />}
  </div>
);

export default Page;

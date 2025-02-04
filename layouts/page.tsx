import React, { PropsWithChildren } from 'react';

import { Footer, PreFooter, Header, Meta, DocHeader } from '../components';
import { Question } from '../uiComponents/question';
import { AlertFusion } from '../uiComponents/alertFusion';

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

const Page: React.FC<PropsWithChildren<IProps>> = ({
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
    <AlertFusion/>
    <main>{children}</main>
    <Question />
    {usePreFooter && <PreFooter background={preFooterBackground} />}
    {useFooter && <Footer />}
  </div>
);

export default Page;

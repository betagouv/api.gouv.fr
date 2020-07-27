import React from 'react';

import Section from './section';
import RichReactMarkdown from '../richReactMarkdown';

const Content = ({ content }) => {
  return (
    <Section id="api-description" title="Description">
      <RichReactMarkdown source={content} />
    </Section>
  );
};

export default Content;

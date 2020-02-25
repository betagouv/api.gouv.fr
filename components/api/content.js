import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Section from './section';

const Content = ({ content }) => {
  return (
    <Section id="api-description" title="Description">
      <ReactMarkdown source={content} />
    </Section>
  );
};

Content.defaultProps = {
  content: null,
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;

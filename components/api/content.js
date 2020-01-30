import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import ScrollableSection from "./scrollable-menu/scrollable-section";

const Content = ({ content, addRef }) => {
  return (
    <ScrollableSection id="api-description" title="Description" addRef={addRef}>
      <ReactMarkdown source={content} />
    </ScrollableSection>
  );
};

Content.defaultProps = {
  content: null
};

Content.propTypes = {
  content: PropTypes.string.isRequired
};

export default Content;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// import isElementVisible from '../../utils';

import { throttle } from 'lodash';
import PageHeader from './pageHeader';

const PageHeaderWrapper = ({ title, logo, tagline }) => {
  const regularHeader = useRef(null);
  const stickyHeader = useRef(null);
  const 

  const handleScroll = throttle(() => {
    console.log(stickyHeader, regularHeader);

    if (
      !regularHeader ||
      !regularHeader.current ||
      !stickyHeader ||
      !stickyHeader.current
    ) {
      return;
    }

    if (window.scrollY >= 150) {
      stickyHeader.current.classList.add('visible');
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <PageHeader
        title={title}
        tagline={tagline}
        logo={logo}
        ref={regularHeader}
      />
      <PageHeader
        title={title}
        tagline={tagline}
        inline={true}
        logo={logo}
        ref={stickyHeader}
      />
    </>
  );
};

PageHeaderWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  tagline: PropTypes.string.isRequired,
};

export default PageHeaderWrapper;
